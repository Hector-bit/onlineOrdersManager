
import InventoryList from "@/app/components/inventory/InventoryList";

export default async function inventoryPage(props: { params: Promise<{mid: string}>, searchParams: Promise<{orderId?: string}> }) {
  const params = await props.params;
  const mid = params.mid;




  return (
    <div>
      <span>Inventory Page</span>
      <InventoryList mid={mid}/>
    </div>
    
  );
}