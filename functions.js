// What is function?
// = A function is a reusable block of code that performs a specific task.

// function structure/syntax

function function_name(paramaters){
    //code
    return value; //optional
}

//Example
function greet(){
    console.log("Hello");
}

greet(); //calling function

//Types of function
// 1. function declaration
function add(a, b){
    return a + b;
}
console.log(add(5, 10)); //15

// 2.function expression
const add = function(a, b){
    return a + b;
}
console.log(add(4, 4));

// 3.Arrow Function 
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 10));

// short arrow function 
const add = (a, b) => a + b;
console.log(add(20, 20));

// 4. Paramaters and Arguments
// Parameters → variables in function
// Arguments → actual values passed

function greet(name){ //parameter
    console.log(name);
}
("greet"); //argument

// 5. return statement - Returns a value from function
function square(x){
    return x * x;
}
console.log(square(4));

// 6.default parameters 
function greet(name = "Guest"){
    console.log(name);
}
greet(); //guest

// 7. function scope
function sum(){
    let a = 10;
}
console.log(a); //Error - a is not defined

// 8.Anonymous function - Functions without name
const sayHi = function(){
    console.log("Hi");
};
sayHi(); //Hi

// 9. Higher order functions - 1.Take another function as argument OR
// 2.Return a function

function greet(fn){
    fn();
}

greet(function(){
    console.log("Hello"); //Hello
});

// 10.Callback functions - function passed as arguments
function fn(callback){
    callback();
}

fn(() => console.log("Callback function"));

// 11.immediately invoked function(IIFE)
(function(){
    console.log("I run immediately");
})();

// 12.Rest parameters 
function sum(...numbers){
    console.log(numbers);
}
sum(1,2,3); 

// 13. Spread with functions
let arr = [1,2,3];
function sum(a, b, c){
    console.log(a + b + c);
}

sum(...arr); //6