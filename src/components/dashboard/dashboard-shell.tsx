"use client";

import dynamic from "next/dynamic";
import { cn } from "@dashboardpack/core/lib/utils";
import { useSidebar } from "@dashboardpack/core/providers/sidebar-context";

// Dynamically import dashboard components to prevent SSR execution
const Sidebar = dynamic(() => import("./sidebar").then(m => m.Sidebar), {
  ssr: false,
});

const Header = dynamic(() => import("./header").then(m => m.Header), {
  ssr: false,
});

const CommandPalette = dynamic(
  () => import("@/components/command-palette").then(m => m.CommandPalette),
  { ssr: false }
);

const PageTransition = dynamic(
  () => import("./page-transition").then(m => m.PageTransition),
  { ssr: false }
);

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { collapsed, layout, container } = useSidebar();

  return (
    <div
      className={cn(
        "min-h-screen",
        container === "boxed"
          ? "mx-auto max-w-[1440px] border-x border-border bg-background"
          : "bg-background"
      )}
    >
      <div className="flex min-h-screen">
        <Sidebar />
        <CommandPalette />

        <div
          className={cn(
            "flex flex-1 flex-col transition-all duration-300",
            layout === "sidebar"
              ? collapsed
                ? "lg:ms-[68px]"
                : "lg:ms-[260px]"
              : ""
          )}
        >
          <Header />
          <main id="main-content" className="flex-1 p-4 sm:p-6">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </div>
    </div>
  );
}