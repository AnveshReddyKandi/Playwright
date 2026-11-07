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
