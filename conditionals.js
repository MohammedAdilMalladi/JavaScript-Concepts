//if
let a = 20;
if(a >= 18){
    console.log(a);
}

//if else 
let s = 40;
if(s <= 20){
    console.log("s is less than 20");
}else{
    console.log("s is greater than 20");
}

//if, else if, else
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