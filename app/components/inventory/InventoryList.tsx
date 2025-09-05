import React from "react";
import { getInventory } from "@/app/actions/inventoryActions";



const InventoryList = async({mid}: {mid: string}) => {


  const inventoryData = await getInventory(mid)

  return (
    <div className="flex flex-col gap-2">
      {inventoryData && inventoryData.map((item: any) => (
        <div key={item.id} className="border border-gray-300 rounded p-2">
          <div className="font-bold">{item.name}</div>
          <div>Price: ${(item.price / 100).toFixed(2)}</div>
          <div>SKU: {item.sku || 'N/A'}</div>
          <div>Available: {item.available ? 'Yes' : 'No'}</div>

          <div>Description: {item.description || 'N/A'}</div>
        </div>
      ))}
    </div>
  );
} 

export default InventoryList;

