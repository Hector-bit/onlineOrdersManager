// import { LOCATION_CREDS, MerchantLocationsType } from "@utils/merchantConstants";
import { LOCATION_CREDS } from "@/utils/merchantConstants";

export const getInventory = async(LocationId: string) => {
  const LOCATION = LOCATION_CREDS[LocationId];

  const response = await fetch(
    `${LOCATION.APIROUTE}/v3/merchants/${LOCATION.MID}/items`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${LOCATION.HOSTED_TOKEN}`,
      }
    }
  );

  if(response.status !== 200) {
    throw new Error(`Error fetching inventory for location ${LocationId}: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('inventory data: ', data);
  return data.elements
}

