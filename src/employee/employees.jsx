import { useEffect, useState } from "react";

const Employees = () => {
  const [employeeList, setEmployeeList] = useState([]);
  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => response.json())
      .then((response) => setEmployeeList(response?.data));
  }, []);
  console.log(employeeList);

  return (
    <div>
      {employeeList.map((employee) => (
        <div>
          <span>{employee.employee_name}</span>
          <span>{employee.employee_age}</span>
          <span>{employee.employee_salary}</span>
        </div>
      ))}
    </div>
  );
};

export default Employees;
