"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, MoreHorizontal, Eye, Pencil, Trash2, Package } from "lucide-react";
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
import { getProducts, deleteProduct, getProductCategories } from "@/lib/data";
import type { Product, ProductStatus } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusFilters: { label: string; value: ProductStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Draft", value: "draft" },
  { label: "Archived", value: "archived" },
];

const statusVariant: Record<ProductStatus, "success" | "warning" | "secondary"> = {
  active: "success",
  draft: "warning",
  archived: "secondary",
};

export default function ProductsPage() {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);
  const [, forceUpdate] = useState(0);
  const refresh = () => forceUpdate((n) => n + 1);

  const categories = getProductCategories();
  const { data: allProducts } = getProducts({
    status: statusFilter === "all" ? undefined : statusFilter,
    category: categoryFilter === "all" ? undefined : categoryFilter,
    perPage: 100,
  });

  const columns = [
    {
      key: "name",
      header: "Product",
      sortable: true,
      render: (row: Product) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
            <Package className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium">{row.name}</p>
            <p className="text-xs text-muted-foreground line-clamp-1">{row.description}</p>
          </div>
        </div>
      ),
    },
    {
      key: "category",
      header: "Category",
      sortable: true,
      render: (row: Product) => (
        <Badge variant="outline" className="text-[11px]">{row.category}</Badge>
      ),
    },
    {
      key: "status",
      header: "Status",
      sortable: true,
      render: (row: Product) => (
        <Badge variant={statusVariant[row.status]} className="capitalize text-[11px]">
          {row.status}
        </Badge>
      ),
    },
    {
      key: "stock",
      header: "Stock",
      sortable: true,
      className: "text-right",
    },
    {
      key: "price",
      header: "Price",
      sortable: true,
      className: "text-right",
      render: (row: Product) => (
        <span className="font-semibold">
          ${row.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      ),
    },
    {
      key: "createdAt",
      header: "Created",
      sortable: true,
    },
    {
      key: "_actions",
      header: "",
      className: "w-10",
      render: (row: Product) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => router.push(`/products/${row.id}`)}>
              <Eye className="mr-2 h-4 w-4" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push(`/products/${row.id}/edit`)}>
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
          title="Products"
          description="Browse and manage your product catalog."
          breadcrumbs={[
            { label: "Dashboard", href: "/" },
            { label: "Products" },
          ]}
        >
          <Button onClick={() => router.push("/products/new")} className="gap-1.5">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </PageHeader>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1 rounded-lg bg-muted p-0.5">
          {statusFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setStatusFilter(f.value)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                statusFilter === f.value
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 rounded-lg bg-muted p-0.5">
          <button
            onClick={() => setCategoryFilter("all")}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
              categoryFilter === "all"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                categoryFilter === cat
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <DataTable
        columns={columns}
        data={allProducts}
        searchPlaceholder="Search products..."
        searchKeys={["name", "description", "category"]}
        emptyMessage="No products found."
        onRowClick={(row) => router.push(`/products/${row.id}`)}
        exportFilename="products"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        title="Delete Product"
        description={`Are you sure you want to delete "${deleteTarget?.name}"? This action cannot be undone.`}
        confirmLabel="Delete"
        variant="destructive"
        onConfirm={() => {
          if (deleteTarget) {
            deleteProduct(deleteTarget.id);
            setDeleteTarget(null);
            refresh();
          }
        }}
      />
    </>
  );
}
