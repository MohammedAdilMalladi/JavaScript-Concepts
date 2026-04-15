// var a = 10;
// a = 20;
// a = 30; 
// console.log(a);

//block scope of var
// var a = 20;
// if(a){
//     console.log(a);
// } //work because var ignores block scope and is function scoped

//function scope of var
// function test(){
//     var a = 20;
// }
// console.log(a); // ReferenceError: a is not defined 

// var a = 10;
// if(a){
//     a = 20;
//     console.log(a);
// }
// console.log(a); //var is widely accessible anywhere in the program, it is not limited to block scope. It is function scoped, meaning it is accessible within the function it is declared in, but not outside of it.

// var a = 20;
// function test(){ 
//     var a = 10;
//     console.log(a); 
// } 
// test(); // Output: 10
// console.log(a); // Output: 20

// var a = 10;
// function test(){
// 	console.log(a)
// }
// test(); // Output: 10, var is function scoped, so it is accessible within the function test() and it will print the value of a which is 10.

// let a = 10;
// a = 20;
// console.log(a); // Output: 20 it can be reassigned, but it cannot be redeclared in the same scope.


// if(true){
	// let b = 50;
// }
// console.log(b); // ReferenceError: b is not defined, because let is block scoped, it is only accessible within the block it is declared in, and it is not accessible outside of that block.

// function test(){
// 	let a = 20;
// 	console.log(a);
// }
// test();// Output: 20, let is block scoped, so it is accessible within the function test() and it will print the value of a which is 20.
// console.log(a); // ReferenceError: a is not defined, because let is block scoped, it is only accessible within the block it is declared in, and it is not accessible outside of that block.

// const a = 10;
// if(true){
// 	console.log(a); // Output: 10, const is block scoped, so it is accessible within the block it is declared in, and it will print the value of a which is 10.
// }

// if(true){
// 	const a = 50;
// }
// console.log(a); // ReferenceError: a is not defined, because const is block scoped, it is only accessible within the block it is declared in, and it is not accessible outside of that block.

// let a = 10;
// {
//   let a = 20;
//   console.log(a);
// }
// console.log(a); // Output: 20, 10,

// var x = 5;
// if (true) {
//   var x = 10;
// }
// console.log(x); // Output: 10, because var is function scoped, so it is accessible within the block it is declared in, and it will print the value of x which is 10.

// const obj = { name: "Adil" };
// obj.name = "Ali";
// console.log(obj.name); // Output: "Ali", because const only prevents reassignment of the variable itself, but it does not prevent modification of the properties of an object. In this case, we are modifying the name property of the obj object, which is allowed even though obj is declared as a const.