function checkCreds(){
    console.log("checkCreds() function started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    // alert("Hello," + fullName);

    if(fullName.length > 20 | fullName.length < 2){
        document.getElementById("LoginStatus").innerHTML =
         "Invalid Full Name! Please Try Again";
    } else if(badgeNumb > 999 | badgeNumb <0){
        document.getElementById("LoginStatus").innerHTML =
        "Invalid Badge Number! Please Try Again";
    } else {
        alert("Welcome, " + fullName);
        location.replace("UATSpacePage.html")
    }
}

    
