let a = 3; 
let b = 1;
let c = a ** b;
console.log(c);


let age = 18;
let add = 2;

if((age + 2) > 18){
    console.log("You can Drive");
}

else if((age - add) < 18){
    console.log("You Cannot Drive");
}

else{
    console.log("You are not Eligible");
}

// Loops statements: 
// 1. While loop
// 2. do while loop
// 3. for loop
// 4. for in loop
// 5. for of loop
// 6. forEach loop

let i = 10;
while (i < 10){
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++
}while(i < 10);

for(let i = 1; i < 100; i++){
    console.log(i);
}

let obj = {
    name: "Adil",
    age: 21,
    job: "Coder"
}

for(const key in obj){
    const element = obj[key];
    console.log(key, element);
}

let c = "Adil";
for(iterator of c){
    console.log(iterator);
}

// functions

function list(name){
    console.log("You are too good "+name+" ");
    console.log("You are very nice "+name+" ");
    console.log("You are really doing well in your acedmics "+name+" ");
}

list("Adil");

function sum(a, b, c=2){
    console.log(a + b + c );
}

sum(5,5,5);

function sum(a , b, c = 5){
    return a + b + c;
}

let result = sum(10, 10);
let result1 = sum(7, 4);
let result2 = sum(3, 2);

console.log("The result of this sum is: " +result);
console.log("The result of this sum is: " +result1);
console.log("The result of this sum is: " +result2);

const my_func = (x)=>{
    console.log("This is an arrow function in javascript: " +x);
}

my_func(30);
my_func(80);
my_func(45);