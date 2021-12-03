function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sum1Res").innerHTML = sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML =
            "Craps - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML =
            "Doubles - you win";
    }
    else {
        document.getElementById("finalRes").innerHTML =
            "Draw - you did not win or lose, please try again";
    }
}

function blastOff() {
    var currTime = 50;
    document.getElementById("countDownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 1000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 2000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 3000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 4000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 6000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 7000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 8000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 9000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
    }, 10000);
}

function btrBlastOff(){
    console.log("btrBlastOff() started");
    var currTime = 50
    for(var i = 0; i <= 10; i = i + 1){
        setTimeout(function(){
        if(currTime > 25 ){
            document.getElementById("countDownTimer").innerHTML = currTime;  
        } else if(currTime == 0) {
            document.getElementById("countDownTimer").innerHTML = "BlastOff!";
        } else {
            document.getElementById("countDownTimer").innerHTML = 
                "Warning, Less Than 1/2 Way To Launch, Time Left = " + currTime;
             }
            currTime = currTime - 5;
        },2000 * i);
    }
}

function start(){
    console.log("start() function started");
    document.getElementById("data").rows["Seconds"].innerHTML = "Reading Data...";
    index= 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function playBowie(){
    console.log("playBowie() started");
    mySound = new sound("DB-Space-Oditty.mp3")
    mySound.play();
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}