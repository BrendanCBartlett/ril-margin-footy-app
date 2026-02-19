"use client";

import React from "react";
import { useTheme } from "@/components/theme-provider";
import { useSidebar } from "./sidebar-context";
import { Button } from "@/components/ui/button";
import { Search, Sun, Moon, Bell, Plus, Menu } from "lucide-react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { setMobileOpen } = useSidebar();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:px-6">
      {/* Left: Mobile menu + Search */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <button
          onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
          className="relative hidden h-9 w-72 items-center rounded-lg border border-input bg-muted/40 pl-9 pr-4 text-left text-sm text-muted-foreground/50 transition-colors hover:bg-muted/60 sm:flex"
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
          Search anything...
          <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="default"
          size="sm"
          className="hidden gap-1.5 h-8 text-xs sm:inline-flex"
        >
          <Plus className="h-3.5 w-3.5" />
          New Order
        </Button>

        <div className="mx-1 hidden h-6 w-px bg-border sm:block" />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>

        <button
          aria-label="Notifications"
          className="relative flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
        </button>

        <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
          AS
        </div>
      </div>
    </header>
  );
}
