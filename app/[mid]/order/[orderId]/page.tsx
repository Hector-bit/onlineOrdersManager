import { LOCATION_CREDS } from "@/utils/merchantConstants";
import { fetchOrderById, fetchLineItemsByOrderId } from "@/utils/merchantFunctions";
import Link from "next/link";
import CustomerInfo from "@/app/components/CustomerInfo";

export default async function orderPage (props: { params: Promise<{mid: string, orderId: string}> }) {
  //my params
  const params = await props.params;
  const { mid, orderId } = params

  //data to use
  const localInfo = LOCATION_CREDS[mid]
  const orderInfo = await fetchOrderById(mid, orderId)
  const lineItems = await fetchLineItemsByOrderId(mid, orderId)

  console.log('order information: ', orderInfo)
  const createdDate = orderInfo ? new Date(orderInfo.createdTime) : undefined
  let laTime = undefined

  if(createdDate){
    laTime = new Intl.DateTimeFormat('en-US', { 
      timeZone: 'America/Los_Angeles', 
      dateStyle: 'full', 
      timeStyle: 'long' 
    }).format(createdDate);
  }

  console.log('line items: ', lineItems)
  

  return ( orderInfo &&
    <div className="flex flex-col gap-4 text-xl">

      {/* BACK BUTTON */}
      <Link href={`/${mid}`} className="">
        <div className="flex justify-center p-4 bg-gray-50 rounded-xl border border-black w-20">Back | Atras</div>
      </Link>
      <div className="text-lg font-bold">Merchant: {localInfo.LOCATIONNAME}</div>

      {/* ORDER INFORMATION */}
      <div className="flex flex-col border-2 border-black rounded-xl p-3">

        {/* ORDER DETAILS */}
        <div>Order id: {orderInfo.id}</div>
        <div>{laTime}</div>
        <div>Price Total: ${orderInfo.total / 100}</div>

        {/* CLIENT DETAILS */}
        {orderInfo.customers && orderInfo.customers.elements.map((customer, index: number) => {
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

      {/* LINE ITEMS FOR ORDER */}
      <div className="border-2 border-[#52B202] rounded-xl p-4">
        <div>LINE ITEMS : ORDEN DEL CLIENTE</div>
        <div className="flex flex-col gap-6">
          {lineItems?.elements.map((lineItem) => {
            return (
              <div key={lineItem.id} className="divide-y-reverse border-black p-4">
                <div>Order: {lineItem.name}</div>
                <div>Note: {lineItem?.note}</div>
                <div>Price: ${lineItem.price ? (lineItem.price/100) : 'N/A'}</div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}