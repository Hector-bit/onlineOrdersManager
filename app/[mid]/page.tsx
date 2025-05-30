import { LOCATION_CREDS } from "@/utils/merchantConstants";
import { fetchOrdersByMid } from "@/utils/merchantFunctions";
import Link from "next/link";
import Search from "../components/Search";
import OrderList from "../components/OrderList";
import SelectEmployee from "../components/SelectEmployee";
import { getEmployees } from "../actions/employeeActions";
// import SearchEmployeeId from "../components/SearchEmployeeId";

export default async function midPage (props: { params: Promise<{mid: string }>, searchParams: Promise<{orderId?: string, employeeId: string}> }) {
  //my params
  const params = await props.params;
  const searchParams = await props.searchParams;
  const mid = params.mid

  const employeeData = await getEmployees(mid);

  const orderIdQuery = searchParams?.orderId || '';
  const employeeIdQuery = searchParams?.employeeId || '';

  const localInfo = LOCATION_CREDS[mid]

  // const orders = await fetchOrdersByMid(mid, orderIdQuery)

  // console.log('elements from orders data: ', orders)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-end">
        <Link href={'/'} className="">
          <div className="flex text-white  font-bold justify-center p-4 bg-gray-50 rounded-xl border border-black w-20 bg-orange-500">
            Atras
          </div>
        </Link>
        
      </div>

      <div className="text-xl font-bold">Ubicacion: {localInfo.LOCATIONNAME}</div>

      <Search query={"order id..."}/>
      <SelectEmployee employees={employeeData} />
      {/* <SearchEmployeeId query={"customer id..."}/> */}

      {/* ORDER LIST */}
      <div className="flex flex-col gap-4">
        <OrderList mid={mid} orderIdQuery={orderIdQuery} employeeIdQuery={employeeIdQuery}/>
        {/* <CustomerInfo mid={""} customerId={""}/> */}
      </div>
    </div>
  )
}
