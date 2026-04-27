"use client";

import dynamic from "next/dynamic";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { Skeleton } from "@dashboardpack/core/components/ui/skeleton";
import { useTranslations } from "@dashboardpack/core/lib/i18n/locale-context";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

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
  const [authStatus, setAuthStatus] = useState("Checking login status...");
  const [rounds, setRounds] = useState<any[]>([]);
  const [fixtures, setFixtures] = useState<any[]>([]);
useEffect(() => {
  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();

    if (data?.user) {
      setAuthStatus(`✅ Logged in as ${data.user.email}`);
    } else {
      setAuthStatus("❌ Not logged in");
    }
  };

  checkUser();
}, []);

  useEffect(() => {
  const loadRounds = async () => {
    const { data, error } = await supabase
      .from("rounds")
      .select("round_number, status, season_id")
      .eq("season_id", "cf1780ed-719b-4f50-a7e8-19c32754fe98")
      .order("round_number");

    console.log("ROUNDS QUERY RESULT:", { data, error });

    if (data) {
      setRounds(data);
    }
  };

  loadRounds();
}, []);

  useEffect(() => {
  const loadFixtures = async () => {
    const { data } = await supabase
      .from("fixtures")
      .select("round_number, home_team, away_team")
      .order("round_number");

    if (data) {
      setFixtures(data);
    }
  };

  loadFixtures();
  }, []);

  const t = useTranslations();
  return (
    <>
      <div className="mb-4 rounded-md bg-muted px-3 py-2 text-sm">
      {authStatus}
      </div>
      <div className="mb-4 rounded-md bg-muted px-3 py-2 text-sm">
    <strong>Rounds loaded:</strong> {rounds.length}
    {rounds.length > 0 && (
      <div className="mt-1">
        First rounds:{" "}
        {rounds.slice(0, 5).map((r) => r.round_number).join(", ")}
      </div>
    )}
  </div>

<div className="mb-4 rounded-md bg-muted px-3 py-2 text-sm">
  <strong>Fixtures loaded:</strong> {fixtures.length}
  {fixtures.length > 0 && (
    <div className="mt-1 space-y-1">
      {fixtures.slice(0, 3).map((f, i) => (
        <div key={i}>
          Round {f.round_number}: {f.home_team} vs {f.away_team}
        </div>
      ))}
    </div>
  )}
</div>

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
