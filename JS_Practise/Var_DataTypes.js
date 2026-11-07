let name = "Anvesh"; 
let age = 25;
let profession = "Software Tester";
console.log(name + " is a " + profession + " with an age of " + age + " years.");

const college = "XYZ University";
const country = "India";
const city = "Hyderabad";
console.log(name + " studied at " + college + " in " + city + ", " + country + ".");

var hobby = "playing chess";
var isMarried = false;
console.log(name + " enjoys " + hobby + " in his free time.");

console.log(typeof name);
console.log(typeof age);
console.log(typeof profession);
console.log(typeof college);
console.log(typeof country);
console.log(typeof city);
console.log(typeof hobby);
console.log(typeof isMarried);

name = "Kandi Anvesh Reddy";
console.log("Updated name: " + name);
//city = "Bangalore";
//console.log("Updated city: " + city);  -- city is const cannot be reassigned, so this line will throw an error if uncommented.

let salary = 50000;
let bonus = 5000;
let totalIncome = salary + bonus;
console.log(name + "'s total income is: " + totalIncome);

console .log(`Anvesh is a ${profession} with an age of ${age} years. He studied at ${college} in ${city}, ${country}. He enjoys ${hobby} in his free time. His total income is: ${totalIncome}.`);
// the above line uses template literals (backticks = ``) for better readability and formatting of the output.

let email;
const phoneNumber = null;
console.log("Email: " + email); // undefined
console.log("Phone Number: " + phoneNumber); // null

let a = "10";
let b = 5;

console.log(a + b); // in this case, 'a' is a string and 'b' is a number, so the + operator concatenates them, resulting in "105".
console.log(Number(a) + b);
console.log(a - b); // subtraction operator, returns the result of subtracting 'b' from 'a', resulting in 5. Here, 'a' is implicitly converted to a number.
console.log(a * b); // multiplication operator, returns the product of 'a' and 'b', resulting in 50.
console.log(a / b); // division operator, returns the result of dividing 'a' by 'b', resulting in 2.
console.log(a % b); // modulus operator, returns the remainder of the division of 'a' by 'b', resulting in 0.
console.log(a ** b); // exponentiation operator, raises 'a' to the power of 'b', resulting in 100000.

let product = "Laptop";
let price = 75000;
let discount = 5000;
let quantity = 2;
let instock = true;
console.log(`The ${product} costs ${price} with a discount of ${discount}. Quantity available: ${quantity}. In stock: ${instock}.`);
let finalPrice = price - discount;
console.log(`The final price of the ${product} is: ${finalPrice}`);
let totalCost = finalPrice * quantity;
console.log(`The total cost for ${quantity} ${product}s is: ${totalCost}`);

let response = {
    statusCode: 200,
    statusMessage: "Success",
    isActive: true,
    userId: 101
};
console.log(`Response: Status Code - ${response.statusCode}, Status Message - ${response.statusMessage}, Is Active - ${response.isActive}, User ID - ${response.userId}`);
console.log("Response Object Type: " + typeof response);
console.log("Response Object Keys: " + Object.keys(response));
console.log("Response Object Values: " + Object.values(response));
console.log("Response Object data types: " + Object.entries(response).map(([key, value]) => `${key}: ${typeof value}`).join(", "));

console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined); // returns "undefined"
console.log(typeof null); // returns "object" due to a historical bug in JavaScript, but null is actually a primitive value.

var ab = 10;
var ab = 20;

console.log(ab); // This will log 20, as 'var' allows redeclaration and the last assignment takes precedence.

console.log("5" + 5); // "55" - string concatenation
console.log("5" - 5); // 0 - subtraction (string converted to number)
console.log("5" * 5); // 25 - multiplication (string converted to number)
console.log(5 + true); // 6 - addition (true is coerced to 1)
console.log(5 + false); // 5 - addition (false is coerced to 0)

let x = 10;
let y = "10";

console.log(x == y); // true - loose equality (type coercion)
console.log(x === y); // false - strict equality (no type coercion)

let result = "Hello" / 5;

console.log(result); // NaN (Not-a-Number) is the result of an invalid mathematical operation. In this case, dividing a string by a number is not a valid operation, so JavaScript returns NaN.
console.log(typeof result); // NaN (Not-a-Number) is of type "number" in JavaScript, which can be counterintuitive.
console.log("10" / 2);      // 5
console.log("Hello" / 2);   // NaN
console.log("10" * 2);      // 20
console.log("Hello" * 2);   // NaN
console.log("10" - 5);      // 5
console.log("Hello" - 5);   // NaN
console.log(typeof NaN);    // "number"

var abc = 10;
let bcd = 20;

{
    var abc = 30;
    let bcd = 40;

    console.log(abc); // This will log 30, as 'var' is function-scoped and the value of 'abc' is updated within the block.
    console.log(bcd); // This will log 40, as 'let' is block-scoped and the value of 'bcd' is only updated within this block.
}

console.log(abc); // This will log 30, as 'var' is function-scoped and the value of 'abc' was updated within the block.
console.log(bcd); // This will log 20, as 'let' is block-scoped and the value of 'bcd' outside the block remains unchanged.
