
// JavaScript Operators Guide

// JavaScript provides several types of operators used to perform operations on variables and values.
// Operators are symbols used to perform operations on values (operands).

// Arithmetic operators
let a = 20, b = 10;
let sum = a + b;
console.log(`Additon of two numbers: ${sum}`);
let c = 20, d = 10;
let sub = c - d;
console.log("Subtraction of two numbers: ", sub);
let e = 2, f = 5;
let mul = e * f;
console.log("Multiplication of two numbers: ", mul);
let g = 5, h = 10;
let div = g / h;
console.log("Division of Two numbers", div);
let i = 2, j = 3;
let mod = i % j;
console.log("Modulus of two numbers: ", mod);
let l = 3, k = 6;
let expo = l ^ k;
console.log("Exponentiation of two numbers: ", expo);

// Assignment Operators
let a = 10; //Simple assignment operator
let a = 10, b = 5;
a += b;
console.log("Addition Assignment Operator: ", a);
a -= b;
console.log("Subtraction Assignment Operator: ", a);
a *= b;
console.log("Multiplication Assignement operator: ", a);
a /= b;
console.log("Division Assignment Operator: ", a);
a **= b;
console.log("Exponentiation Assignment Operator: ", a);
a %= b;
console.log("Modulus/Remainder Assignment operator: ", a);

// Comparison operators
console.log("1.", 10 > 5); //true
console.log("2.", 10 < 5); //false
console.log("3.", 50 >= 50); //true
console.log("4.", 90 <= 99); //true
console.log("5.", 5 != 5); //false
console.log("6.", 10 !== "10"); //true 
console.log("7.", 10 == "10"); // true
console.log("8.", 10 === 10); //true

// Logical Operators: Logical operators are used to combine multiple conditions and return true/false (or actual values in JS).
// AND (&&) Short-Circuit
console.log(true && "Hello");   // "Hello"
console.log(false && "Hello");  // false

// Explanation:
// If first is false → stops there
// If first is true → returns second value

let age = 18, HasId = true;
console.log(age >= 18 && HasId); // true / Logical AND operator returns true if both values are true else false
console.log(age > 18 || !HasId); // false / Logical OR operator returns true if any value is true else false
console.log(!HasId);  // false / reverses the values turns true into false and false into true

// Ternary Operator
let age = 18;
let result = age >= 18 ? "Adult": "Minor";
console.log(result); //Adult

// type operators
console.log(typeof 10); //number
let obj = {
    name: "adil"
};
console.log(obj instanceof Object); //true

// String concatenation
console.log("Hi " + "Adil");

// Relational operators
let obj = { name: "adil"};
console.log("name" in obj); true 