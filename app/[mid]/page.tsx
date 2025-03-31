import { LOCATION_CREDS } from "@/utils/merchantConstants";
import { fetchOrdersByMid } from "@/utils/merchantFunctions";
import Link from "next/link";
import Search from "../components/Search";
import OrderList from "../components/OrderList";

export default async function midPage (props: { params: Promise<{mid: string }>, searchParams: Promise<{query?: string}> }) {
  //my params
  const params = await props.params;
  const searchParams = await props.searchParams;
  const mid = params.mid
  const queryVal = searchParams?.query || '';

  const localInfo = LOCATION_CREDS[mid]

  const orders = await fetchOrdersByMid(mid, queryVal)

  console.log('elements from orders data: ', orders)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-end">
        <Link href={'/'} className="">
          <div className="flex text-white text-lg font-bold justify-center p-4 bg-gray-50 rounded-xl border border-black w-20 bg-orange-500">
            Atras
          </div>
        </Link>
        
      </div>

      <div className="text-xl font-bold">Ubicacion: {localInfo.LOCATIONNAME}</div>
      <div className="text-xl font-bold">Ordenes en lista: {orders?.elements.length}</div>

      <Search query={"order id..."}/>

      {/* ORDER LIST */}
      <div className="flex flex-col gap-4">
        <OrderList mid={mid} query={queryVal}/>
        {/* <CustomerInfo mid={""} customerId={""}/> */}
      </div>
    </div>
  )
}
