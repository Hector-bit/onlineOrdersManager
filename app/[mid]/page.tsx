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

  console.log('does it update here: ', queryVal)

  //data to use
  const localInfo = LOCATION_CREDS[mid]

  let orders = await fetchOrdersByMid(mid, queryVal)

  // const handleSearch = async(term:string) => {
  //   clearTimeout(timer); // Clear previous timer
  //   timer = setTimeout(() => func(...args), delay);
  //   console.log(`Searching... ${term}`);
   
  //   // const params = new URLSearchParams(searchParams);
  //   // params.set('page', '1')
  //   // if (term) {
  //   //   params.set('query', term);
  //   // } else {
  //   //   params.delete('query');
  //   // }
  //   // replace(`${pathname}?${params.toString()}`);
  //   orders = await fetchOrdersByMid(mid)
  // }, 300);

  // orders = await fetchOrdersByMid(mid, query)

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
      <div className="text-xl font-bold">Order List / Lista de Ordenes: {orders?.elements.length}</div>

      <Search query={"order id..."}/>

      {/* ORDER LIST */}
      <div className="flex flex-col gap-4">
        <OrderList mid={mid} query={queryVal}/>
        {/* <CustomerInfo mid={""} customerId={""}/> */}
      </div>
    </div>
  )
}
