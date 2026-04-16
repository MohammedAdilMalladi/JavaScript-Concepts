// //if
let a = 20;
if(a >= 18){
    console.log(a);
}

// //if else 
let s = 40;
if(s <= 20){
    console.log("s is less than 20");
}else{
    console.log("s is greater than 20");
}

// //if, else if, else
let score = 75;
if(score >= 90){
    console.log("Grade A");
}else if(score >= 75){
    console.log("Grade B");
}else if(score >= 50){
    console.log("Grade C");
}else{
    console.log("fail");
}

//Nested if 
let age = 20;
let HasId = true;
if(age >= 18){
    if(HasId){
        console.log("Entry allowed");
    }else{
        console.log("Entry is denied");
    }
}else{
    console.log("Not Eligible for entry");
}

//ternary shorthand operator 
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// Truthy and Falsy Values

// JavaScript automatically treats some values as `true` or `false` in conditions.

// **Falsy values** (treated as `false`):

// ```javascript
// false
// 0
// ""        // empty string
// null
// undefined
// NaN
// ```

// **Truthy values** (everything else):

// ```javascript
// true
// 1
// "hello"
// []        // even empty array
// {}        // even empty object
// ```

// Example - 1. if first value is true then it returns the second value
//           2. if first value is false or falsy values then it returns false/falsy value/first value
let x = 18, HasId = true;
console.log(x >= 18 && !HasId); // false
console.log(null && HasId); // null

// switch in JavaScript
let day = 1;
switch(day){
    case 1: 
          console.log("Monday");
          break;
    case 2: 
          console.log("Tuesday");
          break;
    case 3: 
          console.log("Wednesday")
          break; 
    default: 
          console.log("Invalid!");                
}

// switch with return (inside a function)

// When inside a function, you can use `return` instead of `break`.

// ```javascript
function getDayType(day) {
    switch (day) {
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Weekday";
    }
}

console.log(getDayType("Saturday")); // Weekend
console.log(getDayType("Monday"));   // Weeday