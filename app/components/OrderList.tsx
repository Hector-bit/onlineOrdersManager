import Link from "next/link"
import { fetchOrdersByMid } from "@/utils/merchantFunctions"
import { CustomerType } from "@/utils/merchantAPITypes"
import { getTimeToString } from "@/utils/helperFunctions"

const OrderList = async({mid, query}: {mid: string, query: string} ) => {

  console.log('CLIENT QUERY: ', query)
  const orders = await fetchOrdersByMid(mid, query)

  return (
    <div className="flex flex-col gap-4">
    {orders && orders.elements.map((order, index: number) => {
      // const localOrders = order

      return (
        <div 
          key={`${index}-order-${order.id}`} 
          className="flex flex-col gap-4 border rounded-xl border-black bg-gray-50 p-4"
        >
          {/* ORDER DETAILS */}
          <div className="grow ">
            <div>{index+1}</div>
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
            className="flex flex-col self-justify-end justify-center items-center w-40 bg-orange-500 p-2 border border-black rounded-xl"
          >
            <div className="text-white font-bold">VER MAS</div> 
          </Link>
        </div>
      )
    })}
  {/* <CustomerInfo mid={""} customerId={""}/> */}
</div>
  )
}

export default OrderList;