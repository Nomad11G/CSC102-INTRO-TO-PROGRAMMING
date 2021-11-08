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
    var currTime = 50;
    for(var i = 0; i < 10; i = i + 1){
        setTimeout(function(){
           document.getElementById("countDownTimer").innerHTML = currTime;
           currTime = currTime - 5;
        },2000 * i);
    }
    setTimeout(function(){
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
    }, 20000);
}