import nextDynamic from "next/dynamic";

const AnalyticsClient = nextDynamic(
  () => import("./analytics-client").then(m => m.default),
  { ssr: false }
);

export const dynamic = "force-dynamic";

export default function AnalyticsPage() {
  return <AnalyticsClient />;
}