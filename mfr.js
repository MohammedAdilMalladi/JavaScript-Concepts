// map() - map() creates a new array by applying a function to every element of the original array.

// syntax:
// array.map((element, index, array) => {
//   return newValue;
// });

// example: 
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.map(num => num * 2);
console.log(result); //[ 2, 4, 6, 8, 10, 12];

// filter() - filter() creates a new array with elements that satisfy a condition
// syntax: 
// array.filter((element, index, array) => {
//   return condition;
// });

// example: 
let arr = [1, 2, 3, 4];
let result = arr.filter(num => num % 2 === 0); // checks each element and keeps only those that return true
console.log(result); //[2, 4]

// reduce() - reduce() reduces an array into a single value
// syntax: 
// array.reduce((accumulator, currentValue) => {
//   return updatedValue;
// }, initialValue);

// accumulator → stores result
// currentValue → current element
// Runs through entire array

// example: 
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); //10

// Conclusion
// map() = applies a function to original array and creates a new array
// filter() = implemented on condition and returns a new array
// reduce() = Use when you want to have a single result such as sum values, multiply values, and build single result 