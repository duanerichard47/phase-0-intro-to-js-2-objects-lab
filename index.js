// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}



function updateEmployeeWithKeyAndValue(employee, key, value)
{
    let updateEmployee = {...employee}
    updateEmployee.key = value;
    console.log(updateEmployee);
    return updateEmployee;  
}
updateEmployeeWithKeyAndValue(employee,'phoneNumber',"7185554444");

// end of 1


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee.key = value;
    console.log(employee);
    return employee;  
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress',"12 Broadway");
// end of 2


function deleteFromEmployeeByKey(employee, key)
{
    let updateEmployee = {...employee}
    delete updateEmployee.key
    
    console.log(updateEmployee);
    return updateEmployee; 

}
    deleteFromEmployeeByKey(employee, 'name')
//end of three

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
   
    delete employee.key
    console.log(employee);
    return employee;  
}
destructivelyDeleteFromEmployeeByKey(employee, 'name')
//end of four