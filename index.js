// Write your solution in this file!

// Initialize employee Object
let employee = {
  name: 'Sam',
  streetAddress: '11 Broadway',
};

// Function to update employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

// Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete property non-destructively
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete property destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Example usage:
console.log('Original Employee:', employee);

// Update non-destructively
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam');
console.log('Updated Employee (non-destructive):', updatedEmployee);

// Update destructively
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
console.log('Updated Employee (destructive):', employee);

// Delete non-destructively
let employeeWithoutAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log('Employee without Address (non-destructive):', undefined);

// Delete destructively
destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log('Employee without Name (destructive):', undefined);
