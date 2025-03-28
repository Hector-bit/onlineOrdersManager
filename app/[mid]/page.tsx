import { LOCATION_CREDS } from "@/utils/merchantConstants";
import CustomerInfo from "../components/CustomerInfo";
import { fetchOrdersByMid } from "@/utils/merchantFunctions";
import Link from "next/link";
import { getTimeToString } from "@/utils/helperFunctions";

export default async function midPage (props: { params: Promise<{mid: string}> }) {
  //my params
  const params = await props.params;
  const mid = params.mid

  //data to use
  const localInfo = LOCATION_CREDS[mid]
  const orders = await fetchOrdersByMid(mid)

  console.log('elements from orders data: ', orders.elements)
  

  return (
    <div>
      <div>Location name: {localInfo.LOCATIONNAME}</div>
      <div className="grid grid-rows-3 gap-3">
        {orders.elements.map((order: any, index: number) => {
          // const localOrders = order

          return (
            <Link key={`${index}-order-${order.id}`}  href={`/${mid}/order/${order.id}`}>
              <div 
                className="flex flex-row border rounded-xl border-black bg-gray-50 p-4"

              >
                <div>
                  <div>order Id: {order.id}</div>
                  <div>created Time: {getTimeToString(order.createdTime)}</div>
                  {order.employee && 
                      <div key={order.employee.id}>
                        <div>employee Id: {order.employee.id}</div>
                      </div>
                  }
                </div>
              </div>

            </Link>
          )
        })}
      </div>
    </div>
  )
}

