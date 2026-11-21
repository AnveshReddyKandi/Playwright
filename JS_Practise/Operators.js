// Operators

let a = 10;

console.log(++a); // Pre-increment: Increments 'a' by 1 and then returns the value. Output: 11
console.log(a++, a); // Post-increment: Returns the value of 'a' (which is 11) and then increments it by 1. Output: 11

let b = 47;
let c = 5;
let d = b % c; // Modulus: Returns the remainder of 'b' divided by 'c' and assigns it to 'd'. Output: 2
console.log(d);
let e = 48;
console.log(e % 2 === 0 ? "Even" : "Odd"); // Checks if 'e' is even or odd. Output: 48 Even

let f = 10;
for (let i = 0; i <= 3; i++) {
    ++f
}
f--;
    console.log(f);

    let x = 10; 
    console.log(x++);
     console.log(++x);
      console.log(x--); 
      console.log(x);

      let totalTestCases = 120;
      let passedTestCases = 75 % totalTestCases; // Modulus: Calculates the remainder of '75' divided by 'totalTestCases' and assigns it to 'passedTestCases'. Output: 75
      let failedTestCases = totalTestCases - passedTestCases; // Subtraction: Calculates the number of failed test cases by subtracting 'passedTestCases' from 'totalTestCases'. Output: 118.4
      console.log(`Total Test Cases: ${totalTestCases}`);
      console.log(`Passed Test Cases: ${passedTestCases}`);
      console.log(`Failed Test Cases: ${failedTestCases}`);

let retryCount = 0;

for (let i = 1; i <= 3; i++) {
    retryCount++;
}

console.log(retryCount);

// or 
let retryCount1 = 0;

[1, 2, 3].forEach(() => retryCount1++);

console.log(retryCount1);

// Assignments Operators - these are used to assign values to variables
let totalTests = 100;

let passedTests = 70;

let failedTests = 30;

passedTests += 10; // or passedTests = passedTests + 10;

failedTests -= 10; // or failedTests = failedTests - 10;

console.log("Passed:", passedTests);
console.log("Failed:", failedTests);

let username = null;

username ??= "Guest"; // Nullish coalescing assignment operator: Assigns "Guest" to 'username' only if 'username' is null or undefined.

console.log(username);

let username2 ; // Declares a variable 'username2' without initializing it, so its value is undefined.

username2 ??= "Guest"; // Nullish coalescing assignment operator: Assigns "Guest" to 'username2' only if 'username2' is null or undefined. Since 'username2' is an empty string (which is not null or undefined), it will not be assigned "Guest".

console.log(username2);

let totalTestcases= 100;

let passedTestcases= 70;

let failedTestcases= 30;

passedTestcases += 15; // or passedTestcases = passedTestcases + 10;

failedTestcases -= 15; // or failedTestcases = failedTestcases - 10;    

console.log("Passed:", passedTestcases);
console.log("Failed:", failedTestcases);

