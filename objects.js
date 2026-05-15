// // What is an Object - An object is a collection of data stored in the form of key-pair values 
// // key - property name
// //value - property value 

let obj = {
    name: "Adil",
    age: 23
};

// //accessing object values
console.log(obj); //accessing the entire object with key and value
// //accessing only the specific property value using the key
// //accessing objects using Dot Notation
console.log(obj.name); //Adil 
console.log(obj.age); //23

// //Accessing objects using Bracket Notation
console.log(obj["name"]); //Adil

// //adding of new properties after object creation
obj.city = "Bengaluru";
console.log(obj["city"]); //Bengaluru

// //we can change exisiting values 
obj.age = 22;
console.log(obj.age); //22

// // delete property 
delete obj.city;
console.log(obj);

// //looping through objects
for(let key in obj){
    console.log(key, obj[key]);
}

let user = {
    name: "Coder",
    greet: function(){
        console.log("Hello");
    }
};

user.greet(); //Hello

// Built-in Object Methods
// 1. Object.keys() - Returns all keys of an object as an array.
let employee = {
    name: "Priya",
    empID: 14123,
    department: "HR"
};

console.log(Object.keys(employee)); //[ 'name', 'empID', 'department' ]

// // 2. Object.values() - Returns all values of an object as an array.
console.log(Object.values(employee)); //[ 'Rahul', 14123, 'HR' ]

// // 3. Object.entries() - Returns object data as array of key-value pairs.
console.log(Object.entries(employee)); //[ [ 'name', 'Rahul' ], [ 'empID', 14123 ], [ 'department', 'HR' ] ]

// // 4. hasOwnProperty - Checks whether the object contains a specific key. returns true or false
console.log(employee.hasOwnProperty("empID")); //true

// 5. Object.assign() - Used to copy properties from one object to another.
let employee2 = Object.assign({}, employee);
console.log(employee2); //{ name: 'Rahul', empID: 14123, department: 'HR' }

// 6. Spread Operator - Used to create a shallow copy of an object.
let employee3 = { ...employee };
console.log(employee3); //{ name: 'Rahul', empID: 14123, department: 'HR' }

// 7. Object.freeze() - Prevents adding, deleting, or changing properties.
Object.freeze(employee);
employee.name = "Rajesh";
console.log(employee.name); //Rahul - Still old value

// 8.Object.seal() - Allows updating existing properties but prevents add/delete.
Object.seal(employee);
employee.department = "Technical Support"; //allowed
employee.age = 25; //not allowed
console.log(employee); //{ name: 'Rahul', empID: 14123, department: 'Technical Support' }