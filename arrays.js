// //What is Array - An array is a collection of multiple values stored in a single variable

// // let arr = [1,2,3,4,5,6]; //array creation
// console.log(arr);
// console.log(arr[0]); //accessing array elements
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(typeof arr); //returns the type of array as object in javascript.
// console.log(Array.isArray(arr)); //true //to check array's type

// console.log(arr.length); //length is used to check the array size

// console.log(arr.toString()); //used to convert array elements into string
// console.log(String(arr)); //toString and String() works the same

// let a = ["Harry", "Adil", "Rahul", "Rohan"];
// console.log(a.join(" - ")); //Harry-Adil-Rahul-Rohan //joins elements of array
// // if array is not structured when printing in the console using console.log and you want to print it in one line use process.stdout.write(arr.toString); but convert the array to string because process.stdout.write only accepts or works on string and buffer and the other way is use join console.log(arr.join(" "));

// //Important array methods
// console.log(arr.pop()); //removes the element from the end and returns the popped element
// console.log(arr);

// console.log(arr.push(100)); // adds an element at the end of the array and returns all the elements of array after pushing
// console.log(arr);
// arr.push("Adil");
// console.log(arr);
// console.log(arr.length);


// arr.shift(); // removes first element from the array and returns the removed element
// console.log(arr);

// arr.unshift("Adil");// adds first element in the array
// console.log(arr);

// delete arr[2]; // deletes element from array
// console.log(arr);

// let arr1 = ["Mohammed", "Adil"]; //array concatenation
// let arr2 = ["Malladi"];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// let arr = [6,5,4,3,1,2]; // array sorting using sort() method
// arr.sort();
// console.log(arr);

// let arr = [1,2,3,4,5,6,7]; //array reversing
// arr.reverse();
// console.log(arr);

let arr = [1,2,3,4,5,6,7,8]; //splice operation performs insertion and deletion from array by specifying first the index number of then the number of deletion and insertion, incase of insertion we need to pass the two mandatory values, and after with the elements we want to add to the specific position in an array.
arr.splice(3,2);
console.log(arr);
arr.splice(3, 3, 47, 44, 55);
console.log(arr);

// const arr = [1,2,3,4,5,6]; //slices out the elements into new array or creates new array.
// const arr2 = arr.slice(2);
// console.log(arr2);