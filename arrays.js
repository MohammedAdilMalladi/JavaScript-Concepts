// //What is Array - An array is a collection of multiple values stored in a single variable

let arr = [1,2,3,4,5,6]; //array creation
console.log(arr);
console.log(arr[0]); //accessing array elements
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(typeof arr); //returns the type of array as object in javascript.
console.log(Array.isArray(arr)); //true //to check array's type

console.log(arr.length); //length is used to check the array size

console.log(arr.toString()); //used to convert array elements into string
console.log(String(arr)); //toString and String() works the same

let a = ["Harry", "Adil", "Rahul", "Rohan"];
console.log(a.join(" - ")); //Harry-Adil-Rahul-Rohan //joins elements of array
// // if array is not structured when printing in the console using console.log and you want to print it in one line use process.stdout.write(arr.toString); but convert the array to string because process.stdout.write only accepts or works on string and buffer and the other way is use join console.log(arr.join(" "));

// //Important array methods
console.log(arr.pop()); //removes the element from the end and returns the popped element
console.log(arr);

console.log(arr.push(100)); // adds an element at the end of the array and returns all the elements of array after pushing
console.log(arr);
arr.push("Adil");
console.log(arr);
console.log(arr.length);


arr.shift(); // removes first element from the array and returns the removed element
console.log(arr);

arr.unshift("Adil");// adds first element in the array
console.log(arr);

delete arr[2]; // deletes element from array
console.log(arr);

let arr1 = ["Mohammed", "Adil"]; //array concatenation
let arr2 = ["Malladi"];
let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr = [6,5,4,3,1,2]; // array sorting using sort() method
arr.sort();
console.log(arr);

let arr = [1,2,3,4,5,6,7]; //array reversing
arr.reverse();
console.log(arr);

let arr = [1,2,3,4,5,6,7,8]; //splice operation performs insertion and deletion from array by specifying first the index number of then the number of deletion and insertion, incase of insertion we need to pass the two mandatory values, and after with the elements we want to add to the specific position in an array.
arr.splice(3,2);
console.log(arr);
arr.splice(3, 3, 47, 44, 55);
console.log(arr);

const arr = [1,2,3,4,5,6]; //slices(cut into portions) out the elements into new array or creates new array.
const arr2 = arr.slice(2);
console.log(arr2);

// includes() - includes() method checks if value exists returns true or false
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includes(2)); 

// indexOf() - returns the index number of the element
console.log("hello".indexOf("o")); //4  

// find() - Returns the first element that satisfies a condition. it returns a value from the array
let arr = [10, 20, 30]
console.log(arr.find(x => x > 15)); // 20 

//some - Returns true if atleast one element satisfies the condition
console.log([1, 2, 3].some(x => x > 2)); //true

// every() - Returns true if all elements satisfy condition 
console.log([2, 4, 6].every(x => x % 2 === 0)) //true

// slice() - Returns a shallow copy of a portion of an array (does not modify original)
let arr = [4, 5, 6, 7, 8, 9];
console.log(arr.slice(4, 6)); // [8, 9]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = arr.slice(4); //it adds remaining elements after the value that we provided in slice method into another array and arr remains same and contains all the values it's not like that first half values will be remained only in arr
console.log(arr2); //Output - [ 5, 6, 7, 8, 9 ]

// splice() - splice() is used to add, remove, or replace elements in an array
// It modifies the original array (important!)
//syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
let arr = [1, 2, 3, 4];
arr.splice(1, 2); //remove elements
console.log(arr); //[1, 4];
arr.splice(4, 0, 5, 6); //adding elements
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
arr.splice(1, 1, 10); //replacing elements 
console.log(arr); //[ 1, 10, 3, 4 ]