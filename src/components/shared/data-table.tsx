"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Search,
  Download,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EmptyState } from "@/components/shared/empty-state";

interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  className?: string;
  render?: (row: T) => React.ReactNode;
  /** Hide column by default in the column visibility picker */
  defaultHidden?: boolean;
  /** Label shown in mobile card view (defaults to header) */
  mobileLabel?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  searchPlaceholder?: string;
  searchKeys?: string[];
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
  perPageOptions?: number[];
  exportFilename?: string;
}

type SortDirection = "asc" | "desc" | null;

interface SortState {
  key: string | null;
  direction: SortDirection;
}

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

export function DataTable<T extends object>({
  columns,
  data,
  searchPlaceholder = "Search...",
  searchKeys,
  emptyMessage = "No results found.",
  onRowClick,
  perPageOptions = [10, 20, 50],
  exportFilename,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortState>({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(perPageOptions[0]);

  // Column visibility state
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(() => {
    const hidden = new Set<string>();
    columns.forEach((col) => {
      if (col.defaultHidden) hidden.add(col.key);
    });
    return hidden;
  });

  const visibleColumns = useMemo(
    () => columns.filter((col) => !hiddenColumns.has(col.key)),
    [columns, hiddenColumns]
  );

  const toggleableColumns = useMemo(
    () => columns.filter((col) => col.key !== "_actions" && col.header),
    [columns]
  );

  const toggleColumn = useCallback((key: string) => {
    setHiddenColumns((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }, []);

  // Filter data by search term
  const filteredData = useMemo(() => {
    if (!search.trim()) return data;
    const term = search.toLowerCase();
    const keys = searchKeys ?? columns.map((c) => c.key);

    return data.filter((row) =>
      keys.some((key) => {
        const value = getNestedValue(row, key);
        return value != null && String(value).toLowerCase().includes(term);
      })
    );
  }, [data, search, searchKeys, columns]);

  // Sort filtered data
  const sortedData = useMemo(() => {
    if (!sort.key || !sort.direction) return filteredData;
    const { key, direction } = sort;

    return [...filteredData].sort((a, b) => {
      const aVal = getNestedValue(a, key);
      const bVal = getNestedValue(b, key);

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return direction === "asc" ? -1 : 1;
      if (bVal == null) return direction === "asc" ? 1 : -1;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();
      const cmp = aStr.localeCompare(bStr);
      return direction === "asc" ? cmp : -cmp;
    });
  }, [filteredData, sort]);

  // Pagination
  const totalItems = sortedData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalItems);
  const paginatedData = sortedData.slice(startIndex, endIndex);

  // Reset to page 1 when search or perPage changes
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setCurrentPage(1);
    },
    []
  );

  const handlePerPageChange = useCallback(
    (value: string) => {
      setPerPage(Number(value));
      setCurrentPage(1);
    },
    []
  );

  // Toggle sort: none -> asc -> desc -> none
  const handleSort = useCallback(
    (key: string) => {
      setSort((prev) => {
        if (prev.key !== key) return { key, direction: "asc" };
        if (prev.direction === "asc") return { key, direction: "desc" };
        return { key: null, direction: null };
      });
    },
    []
  );

  // CSV export
  const handleExport = useCallback(() => {
    const exportCols = columns.filter((c) => c.key !== "_actions" && c.header);
    const header = exportCols.map((c) => c.header).join(",");
    const rows = sortedData.map((row) =>
      exportCols
        .map((col) => {
          const val = getNestedValue(row, col.key);
          const str = val != null ? String(val) : "";
          return str.includes(",") || str.includes('"')
            ? `"${str.replace(/"/g, '""')}"`
            : str;
        })
        .join(",")
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${exportFilename || "export"}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }, [columns, sortedData, exportFilename]);

  // Generate page numbers to display
  const pageNumbers = useMemo(() => {
    const pages: (number | "ellipsis")[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (safeCurrentPage > 3) pages.push("ellipsis");

      const start = Math.max(2, safeCurrentPage - 1);
      const end = Math.min(totalPages - 1, safeCurrentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (safeCurrentPage < totalPages - 2) pages.push("ellipsis");
      pages.push(totalPages);
    }

    return pages;
  }, [totalPages, safeCurrentPage]);

  // Columns for the mobile card view (exclude actions)
  const mobileCardColumns = useMemo(
    () => visibleColumns.filter((col) => col.key !== "_actions"),
    [visibleColumns]
  );

  // Get the actions column if it exists
  const actionsColumn = useMemo(
    () => columns.find((col) => col.key === "_actions"),
    [columns]
  );

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={search}
            onChange={handleSearchChange}
            className="pl-9"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5">
              <SlidersHorizontal className="size-4" />
              <span className="hidden sm:inline">Columns</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {toggleableColumns.map((col) => (
              <DropdownMenuCheckboxItem
                key={col.key}
                checked={!hiddenColumns.has(col.key)}
                onCheckedChange={() => toggleColumn(col.key)}
              >
                {col.header}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {exportFilename && (
          <Button variant="outline" size="sm" onClick={handleExport} className="gap-1.5">
            <Download className="size-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        )}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {visibleColumns.map((column) => (
                <TableHead
                  key={column.key}
                  className={cn(
                    column.sortable && "cursor-pointer select-none",
                    column.className
                  )}
                  onClick={
                    column.sortable ? () => handleSort(column.key) : undefined
                  }
                >
                  <span className="inline-flex items-center gap-1">
                    {column.header}
                    {column.sortable && (
                      <span className="text-muted-foreground">
                        {sort.key === column.key && sort.direction === "asc" ? (
                          <ArrowUp className="size-3.5" />
                        ) : sort.key === column.key &&
                          sort.direction === "desc" ? (
                          <ArrowDown className="size-3.5" />
                        ) : (
                          <ArrowUpDown className="size-3.5 opacity-40" />
                        )}
                      </span>
                    )}
                  </span>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className={cn(
                    onRowClick && "cursor-pointer"
                  )}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                >
                  {visibleColumns.map((column) => (
                    <TableCell key={column.key} className={column.className}>
                      {column.render
                        ? column.render(row)
                        : (getNestedValue(row, column.key) as React.ReactNode) ??
                          "\u2014"}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={visibleColumns.length} className="h-24">
                  <EmptyState
                    title={emptyMessage}
                    className="py-0"
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {paginatedData.length > 0 ? (
          paginatedData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={cn(
                "rounded-lg border bg-card p-4 space-y-3",
                onRowClick && "cursor-pointer active:bg-muted/50"
              )}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
            >
              {/* First column rendered prominently as the card header */}
              {mobileCardColumns[0] && (
                <div className="flex items-center justify-between">
                  <div className="font-medium">
                    {mobileCardColumns[0].render
                      ? mobileCardColumns[0].render(row)
                      : (getNestedValue(row, mobileCardColumns[0].key) as React.ReactNode) ?? "\u2014"}
                  </div>
                  {actionsColumn?.render && (
                    <div onClick={(e) => e.stopPropagation()}>
                      {actionsColumn.render(row)}
                    </div>
                  )}
                </div>
              )}
              {/* Remaining columns as label-value pairs */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {mobileCardColumns.slice(1).map((col) => (
                  <div key={col.key}>
                    <p className="text-xs text-muted-foreground">
                      {col.mobileLabel || col.header}
                    </p>
                    <div className="mt-0.5 font-medium">
                      {col.render
                        ? col.render(row)
                        : (getNestedValue(row, col.key) as React.ReactNode) ?? "\u2014"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <EmptyState title={emptyMessage} />
        )}
      </div>

      {/* Pagination footer */}
      {totalItems > 0 && (
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{endIndex} of {totalItems} results
          </p>

          <div className="flex items-center gap-4">
            {/* Per-page selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Rows</span>
              <Select
                value={String(perPage)}
                onValueChange={handlePerPageChange}
              >
                <SelectTrigger size="sm" className="w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {perPageOptions.map((option) => (
                    <SelectItem key={option} value={String(option)}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Page numbers */}
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                disabled={safeCurrentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </Button>
              <span className="hidden sm:contents">
                {pageNumbers.map((page, i) =>
                  page === "ellipsis" ? (
                    <span
                      key={`ellipsis-${i}`}
                      className="px-1 text-sm text-muted-foreground"
                    >
                      ...
                    </span>
                  ) : (
                    <Button
                      key={page}
                      variant={page === safeCurrentPage ? "default" : "outline"}
                      size="sm"
                      className="min-w-8"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  )
                )}
              </span>
              <span className="sm:hidden text-sm text-muted-foreground px-2">
                {safeCurrentPage} / {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={safeCurrentPage >= totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
