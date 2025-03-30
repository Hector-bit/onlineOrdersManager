export type MerchantLocationsType = 'SELECT' | 'EVERSON' | 'BLAINE' | 'BELLINGHAM' | 'TEST1' | 'TEST2'

export const LOCATION_CREDS: Record<string, { LOCATIONNAME: string, APIROUTE: string, MID: string, HOSTED_TOKEN: string, SIGNATURE: string, EMPLOYEE: string }> = {
  'SELECT': {
    LOCATIONNAME: 'select',
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: 'select',
    HOSTED_TOKEN:'select',
    SIGNATURE: 'select',
    EMPLOYEE: 'select'
  },
  'TEST1': {
    LOCATIONNAME: 'Test1',
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: process.env.TEST_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.TEST_API_KEY as string,
    SIGNATURE: process.env.TEST_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE_TEST as string
  },
  'XNZX5N3BWHS91': {
    LOCATIONNAME: 'Testing',
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: process.env.TEST_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.TEST_API_KEY as string,
    SIGNATURE: process.env.TEST_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE_TEST as string
  },
  'J3KVM1W6HJ741': {
    LOCATIONNAME: 'Bellingham',
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.BELLINGHAM_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BELLINGHAM_API_KEY as string,
    SIGNATURE: process.env.BELLINGHAM_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE as string
  },
  'QBWHTSYM3ZBV1': {
    LOCATIONNAME: 'Everson',
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.EVERSON_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.EVERSON_API_KEY as string,
    SIGNATURE: process.env.EVERSON_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE as string
  },
  'FCC48C64HDCH1': {
    LOCATIONNAME: 'Blaine',
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.BLAINE_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BLAINE_API_KEY as string,
    SIGNATURE: process.env.BLAINE_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE as string
  }
}

export const locationParams = [
  { name: 'Test', mid: 'XNZX5N3BWHS91'},
  { name: 'Bellingham', mid: 'J3KVM1W6HJ741'},
  { name: 'Everson', mid: 'QBWHTSYM3ZBV1'},
  { name: 'Blaine', mid: 'FCC48C64HDCH1'}
]

