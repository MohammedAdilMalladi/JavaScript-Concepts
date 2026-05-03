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

// inheritance
class Base{
    parent(){
        console.log("this is parent class"); //this is parent class
    }
}

class Derived extends Base{
    child(){
        console.log("This is child class"); //this is chid class
    }
}

let d = new Derived();
d.parent();
d.child();