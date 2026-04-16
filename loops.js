// A loop is used to execute a block of code repeatedly until a condition is met.

// for loop - Used when you know how many times you want to run a loop.
for(let i = 1; i <= 3; i++){
    console.log(i);
}

// while loop - runs as long as the condition is true 
let j = 1;
while(j <= 5){
    console.log(j);
    j++;
}

//do while loop - runs atleast one time even if the condition is false
let k = 1;
do{
  console.log(k);
  k++;
}while(k <= 5);

// for...of - Used to iterate over values of iterable objects (arrays, strings)

let arr = ["ironman", "superman", "hulk", "thor", "captain america"];

for(let value of arr){
    console.log(value);
}

// for...in - Used to iterate over keys (properties) of an object

let obj = {
    name: "Adil",
    age: 22,
    gender: "Male"
};

for(let key in obj){
    console.log(key, obj[key]);
}

//Loop control statements
// 1. break - used to stop execution or stop loop completely if condition is met. 
for(let i = 1; i <= 5; i++){
    if(i === 3) break;
    console.log(i);
}

// 2. continue - used to skip the current iteration
for(let i = 1; i <= 5; i++){
    if(i === 3) continue;
    console.log(i);
}

// // Nested Loops
let rows = 5;
for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write(`${j} `);
    }
    console.log();
}

// Output
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

// Advanced Looping
// Looping over arrays
let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// Looping with conditons
for(let i = 0; i <= 10; i++){
    if(i % 2 === 0) // for even numbers
        console.log(i);
}

for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0) // for odd numbers
        console.log(i);
}