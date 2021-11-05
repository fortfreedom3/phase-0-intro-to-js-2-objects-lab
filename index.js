const employee = {
    name: "Meri Pippin", 
    streetAddress: "Route 637, El Camino, Spain",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    let copy = {...obj};
    copy[key] = value;
    return copy;
}

// updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];  
    return employee;  
};

// console.log(deleteFromEmployeeByKey(employee, 'name'));




// const employee = {
//     name: "Meri Pippin", 
//     streetAddress: "Route 637, El Camino, Spain",
// }

// function updateEmployeeWithKeyAndValue(obj, key, value) {
//     return Object.assign({},obj,{[key]:value});
// };

// function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
//     obj[key]=value;
//     return employee;
// }

// function deleteFromEmployeeByKey(obj, key){
//     const newEmployee = {...obj, ...key};
//     delete newEmployee[key]
//     return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey(obj, key) {
//     delete obj[key];
//     return obj;
// }
