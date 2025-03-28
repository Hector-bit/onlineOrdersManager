import { fetchCustomerInfoById } from "@/utils/merchantFunctions"


const CustomerInfo = async(props: { mid: string, customerId: string }) => {
  //my params
  const { mid, customerId } = props
  const customerInfo = await fetchCustomerInfoById(mid, customerId)

  console.log('customer info', customerInfo)

  return (
    customerInfo && (
      <div>
        <div>Firstname: {customerInfo.firstName}</div>
        <div>Lastname: {customerInfo.lastName}</div>
        {/* <div>Customer id: {customerInfo.id}</div> */}
      </div>
    )
  )
}


export default CustomerInfo