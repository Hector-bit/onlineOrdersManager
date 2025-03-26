import { LOCATION_CREDS } from "@/utils/merchantConstants";
import { fetchOrdersByMid, fetchOrderById } from "@/utils/merchantFunctions";
import Link from "next/link";

export default async function orderPage (props: { params: Promise<{mid: string, orderId: string}> }) {
  //my params
  const params = await props.params;
  const { mid, orderId } = params

  //data to use
  const localInfo = LOCATION_CREDS[mid]
  const orderInfo = await fetchOrderById(mid, orderId)

  console.log('order information: ', orderInfo)
  

  return (
    <div>
      <div>Location name: {localInfo.LOCATIONNAME}</div>
      <div className="grid grid-rows-3">
        {orderInfo.map((order: any) => {
          // const localOrders = order

          return (
            <Link href={"/"}>
              <div key={order.id} className="border-2 rounded-xl border-white">
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

