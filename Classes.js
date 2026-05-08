// class LandRover{
//     constructor(brand){
//         console.log("Constructor will be invoked automatically"); //Constructor will be invoked automatically
//         this.brand = brand;
//     }

//     startengine(){
//         console.log("Engine started"); //Engine started
//     }

//     stop(){
//         console.log("Stop"); //Stop
//     }
// }

// let Defender = new LandRover("Defender");
// Defender.startengine();
// Defender.stop();

// this keyword - the object that is currently executing the function, the object that calls the function

// inheritance - inheritance can be defined as accessing the properties and methods of parent class into child class
class Person{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }
    parent(){
        console.log("this is parent class"); //this is parent class
    }
}

class Engineer extends Person{
    constructor(name){
        super(name); //must be used in child class constructor to invoke parent class constructor
    }
    child(){
        console.log("This is child class"); //this is chid class
    }
}

//if parent and child class have same function name then child class's function overrides parent class's function

let e = new Engineer("Adil");
e.parent();
e.child();

// Practice question 1
let data = "secret website data";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("DATA: ", data);
    }

}

//Practice question 2
class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "Admin can change data";
    }
}

let u1 = new User("User1", "abc@gmail.com");
let u2 = new User("User2", "xyz@gmail.com");

let admin = new Admin("Admin", "jkl@gmail.com");