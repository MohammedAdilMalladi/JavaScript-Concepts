// Types of data in JavsScript include:
// 1. Primitive Data Types:
//    - String: Represents textual data, enclosed in single or double quotes. Example: "Hello, World!"
//    - Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14
//    - Boolean: Represents logical values, either true or false. Example: true, false
//    - Null: Represents the intentional absence of any object value. Example: null
//    - Undefined: Represents a variable that has been declared but not assigned a value. Example: undefined
//    - Symbol: Represents a unique identifier, often used for object properties. Example: Symbol('description')
// 2. Non-Primitive Data Types:
//     - Object: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be of any data type. Example: { name: "Alice", age: 30 }
//     - Array: Represents an ordered list of values, which can be of any data type. Example: [1, "two", true, null]
//     - Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log("Hello!"); }
//     - Date: Represents a specific point in time. Example: new Date()
    
let name = "Brendan";
console.log(name); //string

let number = 42;
console.log(number); //number

let isLoggedIn = true;
console.log(isLoggedIn); //boolean

let x;
console.log(x); //undefined

let data = null;
console.log(data); //null

let num = 12345678901234567890n; // BigInt
console.log(num); 

let id = Symbol('id');
console.log(id); // Symbol(id)


// Non-primitive data types:
// 1. Object - Object in JavaScript can be defined as key-value pairs
let person = {
    name: "Alice",
    age: 30
};
console.log(person);

//Array - Array is a collection of elements that has the same type
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); 

// function() -  function is used to perform a specific task
function greet() { 
    console.log("Hello!");
}
greet(); // Hello!

// string - Collection of Characters enclosed within double quotes is known as String
let str = "Adil";
console.log(typeof str); //typeof operator