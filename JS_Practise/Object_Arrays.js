//Objets and Arrays

let Ranges = [0, 10, 20, 30, 40, 50];
console.log(`Ranges: ${Ranges}`);
console.log(`Ranges Length: ${Ranges.length}`);
console.log(`Ranges Type: ${typeof Ranges}`);
console.log(`Values at the index: ${Ranges[0]}, ${Ranges[1]}, ${Ranges[3]}, ${Ranges[5]}`); // This will log the values at the specified indices of the Ranges array.
console.log(`Data types of Ranges values: ${Ranges.map((v) => typeof v).join(", ")}`); // This will log the data types of each value in the Ranges array, which are all numbers in this case.

let employee = {
    name: "Anvesh",
    age: 25,
    role: "Software Tester",
    skills: ["JavaScript", "Selenium", "Cypress"],
}
console.log(`Employee Name: ${employee.name}, Age: ${employee.age}, Role: ${employee.role}, Skills: ${employee.skills.join(", ")}`);

employee.department = "Quality Assurance"; // Adding a new property to the object
console.log(`Employee Department: ${employee.department}`);
employee.role = "Senior Software Tester"; // Updating an existing property
console.log(`Updated Employee Role: ${employee.role}`);
delete employee.age; // Deleting a property from the object
console.log(`Employee Age after deletion: ${employee.age}`); // This will log 'undefined' as the age property has been deleted.
console.log(typeof employee); // This will log 'object' as employee is an object.
console.log(typeof employee.age, typeof employee.name, typeof employee.role, typeof employee.skills, typeof employee.department); // This will log the data types of the specified properties.
console.log(employee.skills[2]); // This will log the third skill in the skills array, which is "Cypress".
console.log(`Employee Object Keys: ${Object.keys(employee)}`); // This will log the keys of the employee object.
console.log(`Employee Object Values: ${Object.values(employee)}`); // This will log the values of the employee object.  
console.log(`Employee Object data types: ${Object.entries(employee).map(([key, value]) => `${key}: ${typeof value}`).join(", ")}`); // This will log the data types of each property in the employee object.
console.log(`Employee Object Entries: ${Object.entries(employee)}`); // This will log the entries (key-value pairs) of the employee object.
console.log(`Employee Object Size: ${Object.keys(employee).length}`); // This will log the number of properties in the employee object.