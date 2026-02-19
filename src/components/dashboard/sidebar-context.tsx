"use client";

import * as React from "react";

type SidebarState = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
};

const SidebarContext = React.createContext<SidebarState>({
  collapsed: false,
  setCollapsed: () => null,
  mobileOpen: false,
  setMobileOpen: () => null,
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }),
    [collapsed, mobileOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export const useSidebar = () => React.useContext(SidebarContext);
