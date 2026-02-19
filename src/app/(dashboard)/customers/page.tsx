"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";
import { DataTable } from "@/components/shared/data-table";
import { getCustomers } from "@/lib/data";
import type { Customer } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusFilters = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
] as const;

export default function CustomersPage() {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const { data: allCustomers } = getCustomers({
    status: filter === "all" ? undefined : filter,
    perPage: 100,
  });

  const columns = [
    {
      key: "name",
      header: "Customer",
      sortable: true,
      render: (row: Customer) => (
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            {row.initials}
          </div>
          <div>
            <p className="text-sm font-medium">{row.name}</p>
            <p className="text-xs text-muted-foreground">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      sortable: true,
      render: (row: Customer) => (
        <Badge
          variant={row.status === "active" ? "success" : "secondary"}
          className="capitalize text-[11px]"
        >
          {row.status}
        </Badge>
      ),
    },
    {
      key: "joinDate",
      header: "Joined",
      sortable: true,
    },
    {
      key: "ordersCount",
      header: "Orders",
      sortable: true,
      className: "text-right",
    },
    {
      key: "totalSpent",
      header: "Total Spent",
      sortable: true,
      className: "text-right",
      render: (row: Customer) => (
        <span className="font-semibold">
          ${row.totalSpent.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="mb-6">
        <PageHeader
          title="Customers"
          description="View and manage your customer base."
          breadcrumbs={[
            { label: "Dashboard", href: "/" },
            { label: "Customers" },
          ]}
        />
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
        data={allCustomers}
        searchPlaceholder="Search customers..."
        searchKeys={["name", "email"]}
        emptyMessage="No customers found."
        exportFilename="customers"
      />
    </>
  );
}
