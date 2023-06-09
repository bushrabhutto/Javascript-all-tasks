// 1. Write a program to take “city” name as input from user. If  user enters “Karachi”, welcome the user like this:  “Welcome to city of lights”

var userValue = prompt("Enter city name :")
if (userValue == "karachi") {
    alert("Welcome to city of light")
}

// 2 . Write a program to take “gender” as input from user.
var gender = prompt("Are you Male or Female")
if (gender == "Male") {
    alert("Good Morning Sir")
}
else if (gender == "Female") {
    alert("Good Morning Ma'am")
}

// 3. Write a program to take input color of road traffic signal 
var signalColor = prompt("Please type  a color name of traffic signal")
if (signalColor == "Red") {
    alert("Must Stop")
}
if (signalColor == "Yellow") {
    alert("Ready to move")
}
if (signalColor == "Green") {
    alert("Move now")
}

// 4.rite a program to take input remaining fuel in car (in litres) from user.
var fule = prompt("How many liters of fule are reamins in your Car?")
if (fule < 0.25) {
    alert("Please refill the fule in your Car")
}

// 5.  Run this script, & check whether alert message would be displayed or not.
// a ( The  given Condition is true )
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b ( The  given Condition is false )
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c  ( In given statement Condition 2 and 4  is true 7 condition 1 and 3 are false )
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d   ( The  given Condition is true )
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e  (The  given condition will print True)
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f (The condition is true because the letter r is less then t in a sequence manner)
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three subjects & total marks.
var obtainedMarks = prompt("Enter obtained marks of your subject: ")
var totalMarks = prompt("Enter Total Marks")
var percentage = (obtainedMarks * 100) / totalMarks

if (percentage >= 80) {
    var garde = "A-one"
    var remarks = "Excellent"
}
else if (percentage < 80 && percentage > 69) {
    var garde = "A "
    var remarks = "Good"
}
else if (percentage < 70 && percentage > 59) {
    var garde = "B "
    var remarks = "You need to improve"
}
else if (percentage < 60) {
    var garde = "Fail"
    var remarks = "Sorry"
}

document.write("<h1>Mark Sheet</h1>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("Total Marks : " + totalMarks)
document.write("<br>")
document.write("Marks Obtained : " + obtainedMarks)
document.write("<br>")
document.write("Percentage : " + percentage)
document.write("<br>")
document.write("Grade: " + garde)
document.write("<br>")
document.write("Remarks: " + remarks)

// 7. Guess game:
var secreteNumber = 7
var userGuess = prompt("Guess any number between 1 - 10: ")
if (userGuess == secreteNumber) {
    document.write("Bingo! Correct answer")
}
else if (userGuess == secreteNumber + 1) {
    document.write("Close enough to the correct answer")
}

// 8. Write a program to check whether the given number isdivisible by 3.
var num = prompt("Enter a number: ")
if (num % 3 == 0) {
    alert("The number is divisble by 3")
}

// 9. Write a program that checks whether the given input is an even number or an odd number.
var num1 = prompt("Enter a number: ")
if (num1 % 2 == 0) {
    alert("Even number")
}
else {
    alert("Odd number")
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
var temp = prompt("Enter a Temprature: ")
if (temp > 40) {
    alert("It is too hot outside.")
}
else if (temp > 30) {
    alert("The Weather today is Normal.”")
}
else if (temp > 20) {
    alert("Today’s Weather is cool.")
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.")
}

// 11. . Write a program to create a calculator for +,-,*, / & % using if statements.
var num1 = parseInt(prompt("Enter First number: "))
var num2 = parseInt(prompt("Enter Second number: "))
var operator = prompt("Enter Operator ")
if (operator == "+") {
    alert(num1 + num2)
}
else if (operator == "-") {
    alert(num1 - num2)
}
else if (operator == "*") {
    alert(num1 * num2)
}
else if (operator == "/") {
    alert(num1 / num2)
}
else if (operator == "%") {
    alert(num1 % num2)
}