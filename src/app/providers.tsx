"use client";

import { ThemeProvider } from "@dashboardpack/core/providers/theme-provider";
import { SidebarProvider } from "@dashboardpack/core/providers/sidebar-context";
import { Toaster } from "@dashboardpack/core/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system">
      <SidebarProvider>
        {children}
        <Toaster richColors closeButton />
      </SidebarProvider>
    </ThemeProvider>
  );
}
