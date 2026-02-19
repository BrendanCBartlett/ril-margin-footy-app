"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { CommandPalette } from "@/components/command-palette";
import { PageTransition } from "./page-transition";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <CommandPalette />

      <div
        className={cn(
          "flex flex-1 flex-col transition-all duration-300",
          collapsed ? "lg:ml-[68px]" : "lg:ml-[260px]"
        )}
      >
        <Header />
        <main id="main-content" className="flex-1 p-4 sm:p-6">
          <PageTransition>{children}</PageTransition>
        </main>
      </div>
    </div>
  );
}
