import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import DashboardPage from "./(dashboard)/page";

export default function Page() {
  return (
    <DashboardShell>
      <DashboardPage />
    </DashboardShell>
  );
}
