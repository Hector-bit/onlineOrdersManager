import { LOCATION_CREDS } from "@/utils/merchantConstants";
import { fetchOrdersByMid, fetchOrderById } from "@/utils/merchantFunctions";
import Link from "next/link";
import CustomerInfo from "@/app/components/CustomerInfo";

export default async function orderPage (props: { params: Promise<{mid: string, orderId: string}> }) {
  //my params
  const params = await props.params;
  const { mid, orderId } = params

  //data to use
  const localInfo = LOCATION_CREDS[mid]
  const orderInfo = await fetchOrderById(mid, orderId)

  console.log('order information: ', orderInfo)
  const createdDate = orderInfo ? new Date(orderInfo.createdTime).toLocaleString() : undefined
  

  return ( orderInfo &&
    <div className="">
      <div>Location name: {localInfo.LOCATIONNAME}</div>
      <div className="flex flex-col border-2 border-black rounded-xl p-3">
        <div>{orderInfo.id}</div>
        <div>{createdDate}</div>
        {orderInfo.customers && orderInfo.customers.elements.map((customer:any, index: number) => {
          return (
            <div key={`${index}-${orderInfo.id}`}>
              <div key={customer.id}>
                <div>Customer Id: {customer.id}</div>
                {/* <CustomerInfo mid={mid} customerId={customer.id}/> */}
              </div>
              <CustomerInfo mid={mid} customerId={customer.id}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

