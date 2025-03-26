import { LOCATION_CREDS } from "@/utils/merchantConstants";
import { fetchOrdersByMid } from "@/utils/merchantFunctions";
import Link from "next/link";

export default async function midPage (props: { params: Promise<{mid: string}> }) {
  //my params
  const params = await props.params;
  const mid = params.mid

  //data to use
  const localInfo = LOCATION_CREDS[mid]
  const orders = await fetchOrdersByMid(mid)

  console.log('ELEMETNST: ', orders.elements)
  

  return (
    <div>
      <div>Location name: {localInfo.LOCATIONNAME}</div>
      <div className="grid grid-rows-3 gap-3">
        {orders.elements.map((order: any, index: number) => {
          // const localOrders = order

          return (
            <Link href={`/${mid}/orders/${order.id}`}>
              <div 
                key={`${index}-order-${order.id}`} 
                className="border-2 rounded-xl border-white p-4"

              >
                  <div>order Id: {order.id}</div>
                  {/* <div>order customers: {order.customers[0]}</div>
                  */}
                  
                  {/* <div>order employee: {order.employee}</div> */}
                  {/* <div>order Id: {order.id}</div>
                  <div>order Id: {order.id}</div>
                  <div>order Id: {order.id}</div> */}
              </div>

            </Link>
          )
        })}
      </div>
    </div>
  )
}

