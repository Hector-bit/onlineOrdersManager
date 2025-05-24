import React from "react";
import { getEmployees } from "../actions/employeeActions";

// interface SelectEmployeeProps {
//   employeeIds: string[];
//   value: string;
//   onChange: (employeeId: string) => void;
//   label?: string;
// }

const SelectEmployee = async(props: {mid: string}) => {
  const { mid } = props;

  const employeeData = await getEmployees(mid);

  console.log('employeeData: ', employeeData);

  return (
    employeeData !== undefined ? (
      <select
        className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        defaultValue=""
      >
        <option value="" disabled>
          Select an employee
        </option>
        {employeeData.elements.map((employee: any) => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </select>
    ) : (
      <div className="text-red-500">No employees found</div>
    )
  );
};

export default SelectEmployee;