"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  CreditCard,
  Package,
  FileText,
  Bell,
  HelpCircle,
  ChevronLeft,
  LogOut,
  Zap,
  X,
  Kanban,
  Calendar,
  ListChecks,
  BookOpen,
} from "lucide-react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: string;
}

const mainNav: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: ShoppingCart, label: "Orders", href: "/orders", badge: "12" },
  { icon: Package, label: "Products", href: "/products" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: Kanban, label: "Kanban", href: "/kanban" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: ListChecks, label: "Wizard", href: "/wizard" },
  { icon: CreditCard, label: "Billing", href: "/billing" },
  { icon: FileText, label: "Invoices", href: "/invoices" },
  { icon: BookOpen, label: "Documentation", href: "/docs" },
];

const secondaryNav: NavItem[] = [
  { icon: Bell, label: "Notifications", href: "/notifications", badge: "3" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help & Support", href: "/support" },
];

function NavItemComponent({
  item,
  collapsed,
  active,
}: {
  item: NavItem;
  collapsed: boolean;
  active: boolean;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
        active
          ? "bg-sidebar-accent text-sidebar-primary"
          : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
      )}
    >
      <Icon
        className={cn(
          "h-[18px] w-[18px] shrink-0 transition-colors",
          active
            ? "text-sidebar-primary"
            : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground/80"
        )}
      />
      {!collapsed && (
        <>
          <span className="flex-1">{item.label}</span>
          {item.badge && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-sidebar-primary/15 px-1.5 text-[10px] font-semibold text-sidebar-primary">
              {item.badge}
            </span>
          )}
        </>
      )}
      {collapsed && item.badge && (
        <span className="absolute right-2 top-1 h-2 w-2 rounded-full bg-sidebar-primary" />
      )}
    </Link>
  );
}

function SidebarContent({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary">
          <Zap className="h-4 w-4 text-sidebar-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-sidebar-foreground">
              Apex
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-sidebar-foreground/40">
              Dashboard
            </span>
          </div>
        )}
      </div>

      {/* Main nav */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="flex-1 space-y-1 overflow-y-auto px-3 py-4"
      >
        <div
          className={cn(
            "mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/30",
            collapsed && "sr-only"
          )}
        >
          Main
        </div>
        {mainNav.map((item) => (
          <NavItemComponent
            key={item.label}
            item={item}
            collapsed={collapsed}
            active={isActive(item.href)}
          />
        ))}

        <div className="my-4 border-t border-sidebar-border" />

        <div
          className={cn(
            "mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/30",
            collapsed && "sr-only"
          )}
        >
          System
        </div>
        {secondaryNav.map((item) => (
          <NavItemComponent
            key={item.label}
            item={item}
            collapsed={collapsed}
            active={isActive(item.href)}
          />
        ))}
      </nav>

      {/* User section */}
      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sidebar-primary/80 to-sidebar-primary text-[11px] font-bold text-sidebar-primary-foreground">
            AS
          </div>
          {!collapsed && (
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium text-sidebar-foreground">
                Aigars S.
              </span>
              <span className="text-[11px] text-sidebar-foreground/50">
                Admin
              </span>
            </div>
          )}
          {!collapsed && (
            <button
              aria-label="Log out"
              className="rounded-md p-1.5 text-sidebar-foreground/40 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground/70"
            >
              <LogOut className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export function Sidebar() {
  const { collapsed, setCollapsed, mobileOpen, setMobileOpen } = useSidebar();

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 hidden h-screen flex-col bg-sidebar transition-all duration-300 ease-in-out lg:flex",
          collapsed ? "w-[68px]" : "w-[260px]"
        )}
      >
        <SidebarContent collapsed={collapsed} />

        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full border border-sidebar-border bg-sidebar text-sidebar-foreground/50 shadow-sm transition-all hover:bg-sidebar-accent hover:text-sidebar-foreground"
        >
          <ChevronLeft
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              collapsed && "rotate-180"
            )}
          />
        </button>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col bg-sidebar transition-transform duration-300 ease-in-out lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent collapsed={false} />

        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close sidebar"
          className="absolute right-3 top-4 flex h-7 w-7 items-center justify-center rounded-md text-sidebar-foreground/50 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </aside>
    </>
  );
}
