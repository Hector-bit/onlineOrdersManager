import { LOCATION_CREDS } from "@/utils/merchantConstants";
import { fetchOrdersByMid } from "@/utils/merchantFunctions";
import Link from "next/link";
import { getTimeToString } from "@/utils/helperFunctions";
import { CustomerType } from "@/utils/merchantAPITypes";

export default async function midPage (props: { params: Promise<{mid: string}> }) {
  //my params
  const params = await props.params;
  const mid = params.mid

  //data to use
  const localInfo = LOCATION_CREDS[mid]
  const orders = await fetchOrdersByMid(mid)

  console.log('elements from orders data: ', orders)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-end">
        <Link href={'/'} className="">
          <div className="flex justify-center p-4 bg-gray-50 rounded-xl border border-black w-20">
            Back
          </div>
        </Link>
        
      </div>

      <div className="text-xl font-bold">Location: {localInfo.LOCATIONNAME}</div>

      {/* ORDER LIST */}
      <div className="flex flex-col gap-4">
          {orders && orders.elements.map((order, index: number) => {
            // const localOrders = order

            return (
              <div 
                key={`${index}-order-${order.id}`} 
                className="flex flex-row gap-4 border rounded-xl border-black bg-gray-50 p-4"
              >
                {/* ORDER DETAILS */}
                <div className="grow text-xl">
                  <div>order Id: {order.id}</div>
                  <div>created Time: {getTimeToString(order.createdTime)}</div>
                  {order.employee && 
                      <div key={order.employee.id}>
                        <div>employee Id: {order.employee.id}</div>
                      </div>
                  }
                  {order.customers && order.customers.elements.map((customer:CustomerType) => {
                    return (
                      <div key={customer.id}>customer id: {customer.id}</div>
                    )
                  })}
                </div>

                {/* SEE MORE BUTTON */}
                <Link 
                  key={`${index}-order-${order.id}`} 
                  href={`/${mid}/order/${order.id}`}
                  className="flex flex-col self-justify-end justify-center items-center text-md p-2 border border-black mb-2 rounded-xl"
                >
                  <div>VER MAS</div> 
                  <div>SEE MORE</div> 
                </Link>
              </div>
            )
          })}
        {/* <CustomerInfo mid={""} customerId={""}/> */}
      </div>
    </div>
  )
}

