"use client";

import dynamic from "next/dynamic";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { Skeleton } from "@dashboardpack/core/components/ui/skeleton";
import { useTranslations } from "@dashboardpack/core/lib/i18n/locale-context";

const RevenueChart = dynamic(
  () => import("@/components/dashboard/revenue-chart").then((m) => m.RevenueChart),
  { loading: () => <Skeleton className="h-[420px] w-full rounded-xl" />, ssr: false }
);

const SidePanel = dynamic(
  () => import("@/components/dashboard/side-panel").then((m) => m.SidePanel),
  { loading: () => <Skeleton className="h-[420px] w-full rounded-xl" />, ssr: false }
);

const RecentOrders = dynamic(
  () => import("@/components/dashboard/recent-orders").then((m) => m.RecentOrders),
  { loading: () => <Skeleton className="h-[400px] w-full rounded-xl" />, ssr: false }
);

const ActivityFeed = dynamic(
  () => import("@/components/dashboard/activity-feed").then((m) => m.ActivityFeed),
  { loading: () => <Skeleton className="h-[400px] w-full rounded-xl" />, ssr: false }
);

export default function DashboardPage() {
  const t = useTranslations();
  return (
    <>
      {/* Page title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">{t("dashboard.title")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("dashboard.welcome")}
        </p>
      </div>

      {/* Stats row */}
      <StatsCards />

      {/* Charts + Side panel row */}
      <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-12">
        <RevenueChart />
        <SidePanel />
      </div>

      {/* Orders + Activity row */}
      <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-12">
        <RecentOrders />
        <ActivityFeed />
      </div>
    </>
  );
}
