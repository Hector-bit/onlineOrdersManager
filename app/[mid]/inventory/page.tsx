import { getInventory } from "@/app/actions/inventoryActions";

export default async function inventoryPage(props: { params: Promise<{mid: string}>, searchParams: Promise<{orderId?: string}> }) {
  const params = await props.params;
  const mid = params.mid;
  
  const inventoryData = await getInventory(mid);
  console.log("Inventory Data: ", inventoryData); // Log the fetched inventory data


  return (
    <div>Inventory Page</div>
  );
}