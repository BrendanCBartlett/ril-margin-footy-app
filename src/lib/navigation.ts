import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  CreditCard,
  FileText,
  Bell,
  Settings,
  HelpCircle,
  Kanban,
  Calendar,
  ListChecks,
  BookOpen,
  ChartNoAxesCombined,
  UserCog,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  keywords?: string[];
  group: "main" | "system";
}

export const navigationItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard, keywords: ["home", "overview"], group: "main" },
  { label: "Analytics", href: "/analytics", icon: BarChart3, keywords: ["charts", "stats", "metrics"], group: "main" },
  { label: "Orders", href: "/orders", icon: ShoppingCart, badge: "12", keywords: ["purchases", "transactions"], group: "main" },
  { label: "Products", href: "/products", icon: Package, keywords: ["catalog", "items", "inventory"], group: "main" },
  { label: "Customers", href: "/customers", icon: Users, keywords: ["clients", "users", "people"], group: "main" },
  { label: "Kanban", href: "/kanban", icon: Kanban, keywords: ["board", "tasks", "drag", "drop"], group: "main" },
  { label: "Calendar", href: "/calendar", icon: Calendar, keywords: ["events", "schedule", "dates"], group: "main" },
  { label: "Wizard", href: "/wizard", icon: ListChecks, keywords: ["form", "steps", "multi-step"], group: "main" },
  { label: "Billing", href: "/billing", icon: CreditCard, keywords: ["payment", "subscription", "plan"], group: "main" },
  { label: "Invoices", href: "/invoices", icon: FileText, keywords: ["bills", "receipts"], group: "main" },
  { label: "Charts", href: "/charts", icon: ChartNoAxesCombined, keywords: ["radar", "treemap", "scatter", "gauge", "graphs"], group: "main" },
  { label: "Documentation", href: "/docs", icon: BookOpen, keywords: ["docs", "guide", "help", "components"], group: "main" },
  { label: "Users", href: "/users", icon: UserCog, keywords: ["team", "members", "roles", "permissions", "rbac"], group: "system" },
  { label: "Notifications", href: "/notifications", icon: Bell, badge: "3", keywords: ["alerts", "messages"], group: "system" },
  { label: "Settings", href: "/settings", icon: Settings, keywords: ["preferences", "account", "profile"], group: "system" },
  { label: "Help & Support", href: "/support", icon: HelpCircle, keywords: ["faq", "contact", "docs"], group: "system" },
];
