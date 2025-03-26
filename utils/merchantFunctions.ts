import { LOCATION_CREDS } from "./merchantConstants";

const getTodayTimestamps = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Start of the day
  const startTime = now.getTime(); // Convert to milliseconds

  now.setHours(23, 59, 59, 999); // End of the day
  const endTime = now.getTime(); // Convert to milliseconds

  return { startTime, endTime };
};

export const fetchOrdersByMid = async(mid: string) => {
  const { startTime, endTime } = getTodayTimestamps();
  const localCreds = LOCATION_CREDS[mid]
  console.log('local: ', localCreds)

  const requestUrl = `${localCreds.APIROUTE}/v3/merchants/${localCreds.MID}/orders`
  const requestUrlFiltered = `${localCreds.APIROUTE}/v3/merchants/${localCreds.MID}/orders?filter=createdTime>${startTime}&filter=createdTime<${endTime}`

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localCreds.HOSTED_TOKEN}`,
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    let orderData = await response.json()
    console.log('order data: ', orderData)
    return orderData

  } catch (error) {
    console.error(`Error fetching orders: ${error}`)
  }
}


export const fetchOrderById = () => {
  const requestUrl = ``

}