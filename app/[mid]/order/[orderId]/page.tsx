import { LOCATION_CREDS } from "@/utils/merchantConstants";
import { fetchOrderById, fetchLineItemsByOrderId } from "@/utils/merchantFunctions";
import Link from "next/link";
import CustomerInfo from "@/app/components/CustomerInfo";
import Image from "next/image";
import { getSvgFromLineItem } from "@/utils/helperFunctions";

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
    <div className="flex flex-col gap-4 text-md">

      {/* BACK BUTTON */}
      <Link href={`/${mid}`} className="w-20 flex self-end justify-center p-4 bg-orange-500 rounded-xl border border-black">
        <div className="text-white font-bold">Atras</div>
      </Link>
      <div className="text-lg font-bold">Merchant: {localInfo.LOCATIONNAME}</div>

      {/* ORDER INFORMATION */}
      <div className="flex flex-col border-2 border-black rounded-xl p-3">

        {/* ORDER DETAILS */}
        <div className="mb-2 font-bold">Information de orden</div>
        <div>Order id: {orderInfo.id}</div>
        <div>{laTime}</div>

        <div className="mt-6 mb-2 font-bold">Information de cliente</div>
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
      <div className="">
        <div className="mt-4 font-bold">ORDEN DEL CLIENTE</div>
        <div className="my-2">Total: ${orderInfo.total / 100}</div>
        <div className="flex flex-col gap-6 border-2 border-black bg-orange-400 rounded-xl p-4">
          {lineItems?.elements.map((lineItem) => {

            const food_item = getSvgFromLineItem(lineItem.name)

            return (
              <div key={lineItem.id} className="flex flex-row justify-between divide-y-reverse border-black font-bold text-white">
                <div>
                  <div>Order: {lineItem.name}</div>
                  <div>{lineItem?.note}</div>
                  <div>Price: ${lineItem.price ? (lineItem.price/100) : 'N/A'}</div>
                </div>
                <div>
                  <Image src={`/ui/food/${food_item}.svg`} alt={food_item} width={40} height={40}/>
                  {/* <div>{food_item}</div> */}
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}