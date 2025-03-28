import { fetchCustomerInfoById } from "@/utils/merchantFunctions"


const CustomerInfo = async(props: { mid: string, customerId: string }) => {
  //my params
  const { mid, customerId } = props
  const customerInfo = await fetchCustomerInfoById(mid, customerId)

  console.log('customer info', customerInfo)

  return (
    <div>
      <div>Firstname: {customerInfo.firstname}</div>
      <div>Lastname: {customerInfo.lastname}</div>
      <div>Customer id: {customerInfo.id}</div>
    </div>
  )
}


export default CustomerInfo