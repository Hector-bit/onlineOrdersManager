'use client';
import React from "react";
import { getEmployees } from "../actions/employeeActions";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

// interface SelectEmployeeProps {
//   employeeIds: string[];
//   value: string;
//   onChange: (employeeId: string) => void;
//   label?: string;
// }

const SelectEmployee = async(props: {mid: string}) => {
  const { mid } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const employeeData = await getEmployees(mid);
  console.log('employeeData: ', employeeData);

  const handleEmployeeSearch = useDebouncedCallback((term) => {
    console.log(`Searching for employee... ${term}`);
    
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('employeeId', term);
    } else {
      params.delete('employeeId');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  

  return (
    employeeData !== undefined ? (
      <select
        className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        defaultValue=""
        onChange={(e) => {
          const selectedEmployeeId = e.target.value;
          handleEmployeeSearch(selectedEmployeeId);
        }}
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