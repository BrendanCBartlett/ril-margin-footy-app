import { cn } from "@dashboardpack/core/lib/utils";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { CommandPalette } from "@/components/command-palette";
import { PageTransition } from "./page-transition";

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-h-screen bg-background")}>
      <div className="flex min-h-screen">
        <Sidebar />
        <CommandPalette />

        <div className="flex flex-1 flex-col">
          <Header />
          <main id="main-content" className="flex-1 p-4 sm:p-6">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </div>
    </div>
  );
}