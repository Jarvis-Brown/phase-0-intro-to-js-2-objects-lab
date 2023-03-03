const employee = {
  name: "Jarvis",
  streetAddress: "35 Saint Louis",
};

const person = {
  name: "Amber"
}

const Amber = "person"


function updateEmployeeWithKeyAndValue(object, key, value) {
  const newEmployee = {...object};
  newEmployee[key] = value;

  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  employee.name = "Sam"
  employee.streetAddress = "12 Broadway"

  return employee;
}

function deleteFromEmployeeByKey(object, key, value) {
  const newEmployee = {...object};
  delete newEmployee.name;
  
 return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object, key, value) {
  delete employee.name;
  
 return employee;
}





console.log(updateEmployeeWithKeyAndValue(employee, person, Sam))

