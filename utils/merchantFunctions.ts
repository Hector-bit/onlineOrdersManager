import { LOCATION_CREDS } from "./merchantConstants";
import { ResponseCustomerById, ResponseLineItemsByOrderId, ResponseOrderById, ResponseOrdersByMID } from "./merchantAPITypes";

const getTodayTimestamps = () => {
  const now = new Date();
  now.setUTCHours(now.getUTCHours() - 7)
  now.setHours(0, 0, 0, 0); // Start of the day
  const startTime = now.getTime(); // Convert to milliseconds

  now.setHours(23, 59, 59, 999); // End of the day
  const endTime = now.getTime(); // Convert to milliseconds

  return { startTime, endTime };
};

// export const getLocationNameByMid = async()

export const fetchOrdersByMid = async(mid: string, query?: string):Promise<ResponseOrdersByMID | undefined> => {
  const { startTime, endTime } = getTodayTimestamps();
  const localCreds = LOCATION_CREDS[mid]
  // console.log('local: ', localCreds)

  // const requestUrl = `${localCreds.APIROUTE}/v3/merchants/${localCreds.MID}/orders`
  const requestUrlFiltered = `${localCreds.APIROUTE}/v3/merchants/${localCreds.MID}/orders?filter=createdTime>${startTime}&filter=createdTime<${endTime}`

  try {
    const response = await fetch(requestUrlFiltered, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localCreds.HOSTED_TOKEN}`,
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // DATA JSONIFIED
    let orderData = await response.json()

    console.log('QUERY VALUE: ', query)

    if(query){
      const matchedList = orderData.elements.filter((order:any) => order.id.includes(query))
      // console.log('matched lista', matchedList.length)
      orderData.elements = matchedList
    }
    
    // console.log('orders list: ', orderData.elements.length)
    return orderData

  } catch (error) {
    console.error(`Error fetching orders: ${error}`)
  }
}


export const fetchOrderById = async(mid: string, orderId: string): Promise<ResponseOrderById | undefined> => {
  const localCreds = LOCATION_CREDS[mid]
  const requestUrl = `${localCreds.APIROUTE}/v3/merchants/${mid}/orders/${orderId}`

  try{
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

    // console.log('order data: ', response)
    let orderData = await response.json()

    // if(query !== ''){
    //   const matchedOrders = orderData.elements.filter((order:any) => order.id.includes(query))
    //   console.log('MATCHED ORDERS')
    //   orderData.elements = matchedOrders
    // }

    return orderData

  } catch(error) {
    console.error('Could not fetch order data: ', error)
    return undefined
  }

}

export const fetchCustomerInfoById = async(mid: string, customerId: string):Promise<ResponseCustomerById | undefined> => {
  const localCreds = LOCATION_CREDS[mid]
  const requestUrl = `${localCreds.APIROUTE}/v3/merchants/${mid}/customers/${customerId}`

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localCreds.HOSTED_TOKEN}`,
      },
    })

    let customerData = await response.json()
    return customerData
  } catch( error ) {
    console.error('error fetching customer info: ', error)
    return undefined
  }
}

export const fetchLineItemsByOrderId = async(mid: string, orderId: string):Promise<ResponseLineItemsByOrderId | undefined> => {
  const localCreds = LOCATION_CREDS[mid]
  const requestUrl = `${localCreds.APIROUTE}/v3/merchants/${mid}/orders/${orderId}/line_items`

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localCreds.HOSTED_TOKEN}`,
      },
    })

    let lineItemData = await response.json()
    return lineItemData
  } catch(error) {
    console.error('error fetching line items: ', error)
    return undefined
  }
}