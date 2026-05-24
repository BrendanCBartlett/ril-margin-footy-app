"use client";

import dynamic from "next/dynamic";
import { StatsCards } from "@/components/dashboard/stats-cards";

// Replace dashboardpack translation with simple fallback
const useTranslations = () => (key: string) => key;

const RevenueChart = dynamic(
  () =>
    import("@/components/dashboard/revenue-chart").then(
      (m) => m.RevenueChart
    ),
  {
    loading: () => (
      <div className="h-[420px] w-full rounded-xl bg-gray-200" />
    ),
    ssr: false,
  }
);

const SidePanel = dynamic(
  () =>
    import("@/components/dashboard/side-panel").then(
      (m) => m.SidePanel
    ),
  {
    loading: () => (
      <div className="h-[420px] w-full rounded-xl bg-gray-200" />
    ),
    ssr: false,
  }
);

const RecentOrders = dynamic(
  () =>
    import("@/components/dashboard/recent-orders").then(
      (m) => m.RecentOrders
    ),
  {
    loading: () => (
      <div className="h-[400px] w-full rounded-xl bg-gray-200" />
    ),
    ssr: false,
  }
);

const ActivityFeed = dynamic(
  () =>
    import("@/components/dashboard/activity-feed").then(
      (m) => m.ActivityFeed
    ),
  {
    loading: () => (
      <div className="h-[400px] w-full rounded-xl bg-gray-200" />
    ),
    ssr: false,
  }
);

export default function DashboardPage() {
  const t = useTranslations();

  return (
    <>
      {/* Page title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          {t("Dashboard")}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("Welcome to your Dashboard")}
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
