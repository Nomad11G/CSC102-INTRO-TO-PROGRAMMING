class Propulsion {
    constructor(
        speed,
        power,
        burnTime,
    ){
        this.speed = speed;
        this.power = power;
        this.burnTime = burnTime;
    }
    //list methods
    launch(){
        alert("Spacecraft lifting off");
        return true;
    }

    landing(){
        alert("Spacecraft landing");
        return true;
    }

    loadFuel(fuelType, fuelAmt){
        alert("Loading Spacecraft with " + fuelAmt + " Gallons of" + fuelType + " Fuel.");
        return true;
    }
}

class Mission {
    //properties list
    constructor(
        fuelLevel,
        oxyLevel,
        foodLevel,
        spaceCraftName,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        numOfAstronauts   
    ){  //substanciate
        this.fuelLevel = fuelLevel;
        this.oxyLevel = oxyLevel;
        this.foodLevel = foodLevel;
        this.spaceCraftName = spaceCraftName;
        this.launchDateDay = launchDateDay;
        this.launchDayMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.numOfAstronauts = numOfAstronauts;
    }

    launch(){
        alert("We Are Taking Off");
    }

    disMissionLaunchDate(){
        alert("This Mission Launches On " + this.launchDayMonth + " " + this.launchDateDay + ", " + this.launchDateYear + " with " + this.numOfAstronauts + " aboard.");
    }
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.disMissionLaunchDate();
}

function launchSpring(){
    console.log("launchSpring() started");
    springLaunch.launch();
}

function displaySpring(){
    console.log("DisplaySpring() started");
    springLaunch.disMissionLaunchDate();
}