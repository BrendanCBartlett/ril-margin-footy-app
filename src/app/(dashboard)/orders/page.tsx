"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PageHeader } from "@/components/shared/page-header";
import { DataTable } from "@/components/shared/data-table";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { getOrders, deleteOrder } from "@/lib/data";
import type { Order, OrderStatus } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusFilters: { label: string; value: OrderStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Processing", value: "processing" },
  { label: "Pending", value: "pending" },
  { label: "Cancelled", value: "cancelled" },
];

const statusVariant: Record<OrderStatus, "success" | "default" | "warning" | "destructive"> = {
  completed: "success",
  processing: "default",
  pending: "warning",
  cancelled: "destructive",
};

export default function OrdersPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<OrderStatus | "all">("all");
  const [deleteTarget, setDeleteTarget] = useState<Order | null>(null);
  const [, forceUpdate] = useState(0);
  const refresh = () => forceUpdate((n) => n + 1);

  const { data: allOrders } = getOrders({
    status: filter === "all" ? undefined : filter,
    perPage: 100,
  });

  const columns = [
    {
      key: "id",
      header: "Order",
      sortable: true,
      render: (row: Order) => (
        <span className="font-mono text-sm font-medium">{row.id}</span>
      ),
    },
    {
      key: "customerName",
      header: "Customer",
      sortable: true,
      render: (row: Order) => (
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            {row.customerInitials}
          </div>
          <div>
            <p className="text-sm font-medium">{row.customerName}</p>
            <p className="text-xs text-muted-foreground">{row.customerEmail}</p>
          </div>
        </div>
      ),
    },
    {
      key: "productName",
      header: "Product",
      sortable: true,
    },
    {
      key: "status",
      header: "Status",
      sortable: true,
      render: (row: Order) => (
        <Badge variant={statusVariant[row.status]} className="capitalize text-[11px]">
          {row.status}
        </Badge>
      ),
    },
    {
      key: "date",
      header: "Date",
      sortable: true,
    },
    {
      key: "trend",
      header: "Trend",
      className: "w-24 hidden md:table-cell",
      render: (row: Order) => {
        if (!row.trend) return null;
        const data = row.trend.map((v) => ({ v }));
        const isUp = row.trend[row.trend.length - 1] >= row.trend[0];
        return (
          <ResponsiveContainer width={80} height={28}>
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="v"
                stroke={isUp ? "var(--color-success)" : "var(--color-destructive)"}
                strokeWidth={1.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      },
    },
    {
      key: "amount",
      header: "Amount",
      sortable: true,
      className: "text-right",
      render: (row: Order) => (
        <span className="font-semibold">
          ${row.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      ),
    },
    {
      key: "_actions",
      header: "",
      className: "w-10",
      render: (row: Order) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => router.push(`/orders/${row.id}`)}>
              <Eye className="mr-2 h-4 w-4" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push(`/orders/${row.id}/edit`)}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive focus:text-destructive"
              onClick={() => setDeleteTarget(row)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <>
      <div className="mb-6">
        <PageHeader
          title="Orders"
          description="Manage and track all customer orders."
          breadcrumbs={[
            { label: "Dashboard", href: "/" },
            { label: "Orders" },
          ]}
        >
          <Button onClick={() => router.push("/orders/new")} className="gap-1.5">
            <Plus className="h-4 w-4" />
            New Order
          </Button>
        </PageHeader>
      </div>

      <div className="mb-4 flex items-center gap-1 rounded-lg bg-muted p-0.5 w-fit">
        {statusFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
              filter === f.value
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <DataTable
        columns={columns}
        data={allOrders}
        searchPlaceholder="Search orders..."
        searchKeys={["id", "customerName", "productName", "customerEmail"]}
        emptyMessage="No orders found."
        onRowClick={(row) => router.push(`/orders/${row.id}`)}
        exportFilename="orders"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        title="Delete Order"
        description={`Are you sure you want to delete order ${deleteTarget?.id}? This action cannot be undone.`}
        confirmLabel="Delete"
        variant="destructive"
        onConfirm={() => {
          if (deleteTarget) {
            deleteOrder(deleteTarget.id);
            setDeleteTarget(null);
            refresh();
          }
        }}
      />
    </>
  );
}
