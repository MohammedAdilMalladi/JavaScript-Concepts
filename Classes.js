class LandRover{
    constructor(brand){
        console.log("Constructor will be invoked automatically"); //Constructor will be invoked automatically
        this.brand = brand;
    }

    startengine(){
        console.log("Engine started"); //Engine started
    }

    stop(){
        console.log("Stop"); //Stop
    }
}

let Defender = new LandRover("Defender");
Defender.startengine();
Defender.stop();