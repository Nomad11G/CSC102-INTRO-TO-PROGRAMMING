function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);     //selected random number between 0 and 1, multiplied by 6, rounded up and stored in die1
    var die2 = Math.ceil(Math.random() * 6);     //selected random number between 0 and 1, multiplied by 6, rounded up and stored in die2
    var sum = die1 + die2                        //the sum of the both die1 and die2 are added together for an overall total
    document.write("Die 1 = " + die1)            //shows the number that was generated in the function of die1 as Die 1= (number)
    document.write("<br/>")                      //creates a line break at the end of the text
    document.write("Die 2 = " + die2)            //shows the number that was generated in the function of Die2 as Die 2= (number)
    document.write("<br/>")                      //creates a line break at the end of the text
    document.write("Sum = " + sum)               //displays  the total from adding die1 and die2
    document.write("<br/>")                      //creates a line break at the end of the text
    if (sum == 7 || sum == 11){                  //function of if the total of die1 and die2 equals 7 or 11
        document.write("CRAPS - you lose")       //continue of previous line, then it would display the phrase, "CRAPS - you lose"
        document.write("<br/>")                  //creates a line break at the end of the text
    }
    else if (die1 == die2 && die1 % 2 == 0){     //function showing if die1 and die2 equal each other, than
        document.write("DOUBLES - you win")      //continue of previous line, then it will diesplay the phrase, "DOUBLES - you win"
        document.write("<br/>")                  //creates a line break at the end of the text
    } 
    else {                                       //function stating that if the total didnt fall under the previous functions, then
        document.write("Draw - you did not win or lose, please try again")  //continue of previous line, it will display the phrase, "Draw - you did not win or lose, please try again"
        document.write("<br/>")                  //creates a line break at the end of the text
    }
}