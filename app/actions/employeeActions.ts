'use server'
import { LOCATION_CREDS } from "@/utils/merchantConstants";

export const getEmployees = async (mid: string) => {
  const localCreds = LOCATION_CREDS[mid];
  const requestUrl = `${localCreds.APIROUTE}/v3/merchants/${mid}/employees`;

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localCreds.HOSTED_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let employeeData = await response.json();

    // if (employeeId) {
    //   employeeData.elements = employeeData.elements.filter((emp: any) => emp.id === employeeId);
    // }

    return employeeData;
  } catch (error) {
    console.error(`Error fetching employees: ${error}`);
  }
}