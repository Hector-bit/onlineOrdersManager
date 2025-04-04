export type LineItemType = {
  createdTime: number
  exchanged: boolean
  id: string
  isOrderFee: boolean
  isRevenue: boolean
  name: string
  orderClientCreatedTime: number

  price?: number
  unitQty?: number
  note?: string
}

export type CustomerType = {
  href: string,
  id: string
}

export type OrderType = {
  clientCreatedTime: number,
  createdTime: number,
  currency: string,
  customers: {
    elements: CustomerType[]
  },
  employee: {
    id: string
  },
  groupLineItems: boolean,
  href: string,
  id: string,
  isVat: boolean,
  manualTransaction: boolean,
  modifiedTime: number,
  payType: string,
  paymentState: string,
  state: string,
  taxRemoved: boolean,
  testMode: boolean,
  total: number
}
// RESPONSE BODY TYPE
//the return body type when you fetch an order by its order id
export type ResponseOrderById = {
  clientCreatedTime: number
  createdTime: number
  currency: string
  customers: {
    elements: CustomerType[]
  }
  device: {
    id: string
  }
  employee: {
    id: string
  }
  groupLineItems: boolean
  href: string
  id: string
  isVat: boolean
  manualTransaction: boolean
  modifiedTime: number
  payType: string
  paymentState: string
  state: string
  taxRemoved: boolean
  testMode: boolean
  total: number
}

export type ResponseCustomerById = {
  href: string,
  id: string,
  firstName: string,
  lastName: string,
  marketingAllowed: boolean,
  customerSince: number,
  metadata: object
}

export type ResponseOrdersByMID = {
  elements: OrderType[]
  href: string
}

export type ResponseLineItemsByOrderId = {
  elements: LineItemType[]
  href: string
}