"use client";

import { StatsCards } from "@/components/dashboard/stats-cards";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { SidePanel } from "@/components/dashboard/side-panel";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { ActivityFeed } from "@/components/dashboard/activity-feed";

export default function DashboardPage() {
  return (
    <>
      {/* Page title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome back, Aigars. Here&apos;s what&apos;s happening with your
          business today.
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
