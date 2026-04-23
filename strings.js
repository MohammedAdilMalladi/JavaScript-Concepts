// string - A string is a sequence of characters used to represent text

let str = "Hello World!"; //declaration and intialization of string

console.log(str); // to access the entire string

// Characters in a string can be accessed using their index (starting from 0).
console.log(str[1]); //e

// string built-in Methods

// 1. include() - Checks if a string contains a specific value and returns true or false.
console.log(str.includes("W")); //true

// 2.indexOf() = Returns the position of the first occurrence of a value in a string.
console.log(str.indexOf("d")); //10

// 3.slice() - Extracts a part of a string and returns it as a new string.
console.log(str.slice(0, 5)); //Hello

// 4. replace() - Replaces a part of the string with another value.
console.log(str.replace("W", "w")); //Hello world!

// 5. split() - Splits a string into an array based on a separator.
let str2 = "a,b,c";
console.log(str2.split(",")); //[ 'a', 'b', 'c' ]

// 6.trim() - Removes whitespace from both ends of a string.
let str3 = "  Hello  ";
console.log(str3.trim());

// 7.toUpperCase() - Converts all characters of a string to uppercase.
console.log(str.toUpperCase()); //HELLO WORLD!

// 8.toLowerCase() - Converts all characters of a string to lowercase.
console.log(str.toLowerCase()); //hello world!

// 9.concat() - Joins two or more strings together.
let str1 = "Hello";
let str2 = "World!";
console.log(str1.concat(" ", str2)); //Hello World!

// 10.startsWith() - Checks if a string starts with a specific value.
console.log(str.startsWith("H")); //true

// 11.endsWith() - Checks if a string ends with a specific value.
console.log(str.endsWith("!")); //true

//startsWith() and endsWith() both string built-in methods are case sensitive

// 12. charAt() - Returns the character at a specified index.
console.log(str.charAt("10")); //d

// 13. length() - Returns the total number of characters in a string.
console.log(str.length); //12