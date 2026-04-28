"use client";

import { ThemeProvider } from "@dashboardpack/core/providers/theme-provider";
import { LocaleProvider } from "@dashboardpack/core/i18n/locale-context";
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
