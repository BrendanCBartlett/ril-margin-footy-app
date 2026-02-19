import { getOrderIds } from "@/lib/data";
import EditOrder from "./edit-order";

export function generateStaticParams() {
  return getOrderIds().map((id) => ({ id }));
}

export default function EditOrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <EditOrder params={params} />;
}
