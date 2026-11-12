//Objets

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

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2024
};

console.log(`Car Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
car.color = "Black"; // Adding a new property to the object
car.model = "Innova"; // Updating an existing property
delete car.year; // Deleting a property from the object
console.log(`Updated Car Model: ${car.model}, Color: ${car.color}, Year after deletion: ${car.year}`);

let person = {
    name: "Anvesh",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};
console.log(`Person Name: ${person.name}, City: ${person.address.city}, State: ${person.address.state}`);
person.address.city = "Bangalore"; // Updating a nested property
console.log(`Updated Person City: ${person.address.city}`); 
person.address.country = "India"; // Adding a new nested property
console.log(`Person Country: ${person.address.country}`);
delete person.address.state; // Deleting a nested property
console.log(`Person State after deletion: ${person.address.state}`); // This will log 'undefined' as the state property has been deleted.


//Arrays 
let Ranges = [0, 10, 20, 30, 40, 50];
console.log(`Ranges: ${Ranges}`);
console.log(`Ranges Length: ${Ranges.length}`);
console.log(`Ranges Type: ${typeof Ranges}`);
console.log(`Values at the index: ${Ranges[0]}, ${Ranges[1]}, ${Ranges[3]}, ${Ranges[5]}`); // This will log the values at the specified indices of the Ranges array.
console.log(`Data types of Ranges values: ${Ranges.map((v) => typeof v).join(", ")}`); // This will log the data types of each value in the Ranges array, which are all numbers in this case.

const student = ["Anvesh", "John", "Jane"];
student.push("Doe"); // Adding a new element to the array
console.log(`Students: ${student.join(", ")}`);

student.pop(); // Removing the last element from the array
console.log(`Students after pop: ${student.join(", ")}`);

student.shift(); // Removing the first element from the array
console.log(`Students after shift: ${student.join(", ")}`);

student.unshift("Alice"); // Adding a new element to the beginning of the array
console.log(`Students after unshift: ${student.join(", ")}`);

student.splice(1, 1); // Removing an element from the array at index 1
console.log(`Students after splice: ${student.join(", ")}`);

student.splice(1, 0, "Bob"); // Adding an element to the array at index 1
console.log(`Students after adding Bob: ${student.join(", ")}`);

student.sort(); // Sorting the array in ascending order
console.log(`Students after sort: ${student.join(", ")}`);

student.reverse(); // Reversing the order of the array
console.log(`Students after reverse: ${student.join(", ")}`);

student.indexOf("John"); // Finding the index of an element in the array
console.log(`Index of John: ${student.indexOf("John")}`);
console.log(`Does the array include John? ${student.includes("John")}`);

student.includes("Jane"); // Checking if an element exists in the array
console.log(`Does the array include Jane? ${student.includes("Jane")}`);

student.findIndex((name) => name === "Jane"); // Finding the index of an element in the array
console.log(`Index of Jane: ${student.findIndex((name) => name === "Jane")}`);

var testCases = [ "Login",
    "Signup",
    "Payment",
    "Logout"];

testCases.push("Profile Update"); // Adding a new element to the array
testCases.pop(); // Removing the last element from the array
testCases.shift(); // Removing the first element from the array
testCases.unshift("Dashboard"); // Adding a new element to the beginning of the array
testCases = testCases.map((testCase) => testCase === "Logout" ? "Checkout" : testCase);
console.log(`Test Cases: ${testCases.join(", ")}`);     
console.log(`Test Cases Length: ${testCases.length}`);

//Array of Objects
let employees = [
    { name: "Anvesh", age: 25, role: "Software Tester" },
    { name: "John", age: 30, role: "Developer" },
    { name: "Jane", age: 28, role: "Designer" }
];
employees.push({ name: "Doe", age: 35, role: "Manager" }); // Adding a new object to the array
employees.pop(); // Removing the last object from the array
employees = employees.map((employee) => employee.name === "John" ? { ...employee, role: "Senior Developer" } : employee); // Updating an object in the array
console.log(`Employees: ${employees.map((employee) => `${employee.name} (${employee.role})`).join(", ")}`); // This will log the names and roles of all employees in the array.
employees = employees.map((employee) => employee.name === "Jane" ? { ...employee, age: 30 } : employee); 
console.log(`Employees: ${employees.map((employee) => `${employee.name} (${employee.age})`).join(", ")}`); // This will log the names and ages of all employees in the array.