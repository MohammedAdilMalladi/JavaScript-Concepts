// What is function?
// = A function is a reusable block of code that performs a specific task.

// function structure/syntax

// function function_name(paramaters){
//     //code
//     return value; //optional
// }

//Example
// function greet(){
//     console.log("Hello");
// }

// greet(); //calling function

//Types of function
// 1. function declaration
// function add(a, b){
//     return a + b;
// }
// console.log(add(5, 10)); //15

// 2.function expression
// const add = function(a, b){
//     return a + b;
// }
// console.log(add(4, 4));

// 3.Arrow Function 
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(10, 10));

// short arrow function 
// const add = (a, b) => a + b;
// console.log(add(20, 20));

// 4. Paramaters and Arguments
// Parameters → variables in function
// Arguments → actual values passed

// function greet(name){ //parameter
//     console.log(name);
// }
// ("greet"); //argument

// 5. return statement 
// function square(x){
//     return x * x;
// }
// console.log(square(4));

// 6.default parameters
// function greet(name = "Guest"){
//     console.log(name);
// }
// greet(); //guest

// 7. function scope
// function sum(){
//     let a = 10;
// }
// console.log(a); //Error - a is not defined

// 8.Anonymous function - Functions without name
// const sayHi = function(){
//     console.log("Hi");
// };
// sayHi();

