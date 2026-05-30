import { StatsCards } from "@/components/dashboard/stats-cards";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
      <StatsCards />
    </div>
  );
}