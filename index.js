// Write your solution in this file!



const employee = {
    name: 'employee',
    streetAddress: '11 Broadway'
    };
//First task
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
    }
    
const new_employee1 = updateEmployeeWithKeyAndValue(employee, "name", "Sam")
console.log(new_employee1.name)


//Second Task
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
const new_employee2 = updateEmployeeWithKeyAndValue(employee, "name", "Sam")
console.log(new_employee2.name)


// Third Task
function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj.name;
    return newObj;
    }
    
let newEmployee = deleteFromEmployeeByKey(employee, "name")

console.log(newEmployee)

//Fourth Task
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}
let newEmployee2 = destructivelyDeleteFromEmployeeByKey(employee, 'name');

console.log(newEmployee2)