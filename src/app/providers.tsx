"use client";

import { ThemeProvider } from "@dashboardpack/core/providers/theme-provider";
import { LocaleProvider } from "@dashboardpack/core/providers/locale-provider";
import { Toaster } from "@dashboardpack/core/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system">
      <LocaleProvider>
        {children}
        <Toaster richColors closeButton />
      </LocaleProvider>
    </ThemeProvider>
  );
}
