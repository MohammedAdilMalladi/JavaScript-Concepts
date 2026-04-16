let arr = [1,2,3,4,5,6,7,8];
let newArr = [];
for (let index = 0; index < arr.length; index++){  //without using map function to create new array.
    const element = arr[index];
    newArr.push(element**2);
}

console.log(newArr);

newArr = arr.map((value)=>{ //with using map function to create or move elements to new array
    return value**2;
})

console.log(newArr);

const greaterThanSeven = (e)=>{
    if(e > 7){
        return true;
    }
    else{
        return false;
    }
}

console.log(arr.filter(greaterThanSeven)); // filter operation is used to filter an array with values that passes a test and creates a new array.

let arr2 = [1,2,3,4,5];

const red = (a, b) =>{
    return a * b;
}

console.log(arr2.reduce(red)); //reduce method reduces an array to a single value and it returns a number 

let string = "harry";
str2 = Array.from(string); // Array.from use case defines that it converts objects or strings into arrays.
console.log(str2);