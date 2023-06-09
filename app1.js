



// 1. Write a program that takes a character (number or string)  in a variable & checks whether the given input is a  number, uppercase letter or lower case letter.
var x = prompt("Enter any number or character: ");

if (x >= 65 && x <= 90) {
    alert("Upper Case");
}
else if (x >= 97 && x <= 122) {
    alert("Lower Case");
}
else if (x >= 48 && x <= 57) {
    alert("Number");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var firstNum = prompt("Enter first number: ");
var secondNum = prompt("Enter second number: ");
if (firstNum > secondNum) {
    alert("first number is greater then a second number")
}
else if (firstNum < secondNum) {
    alert("second number is less then a first number")
}
else if (firstNum == secondNum) {
    alert('both numbers are equal')
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num = parseInt(prompt('Enter any number: '))
if (num > 0) {
    alert('Positive')
}
else if (num == 0) {
    alert('0')
}
else {
    alert("Negative")
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var char = prompt("Enter any character: ");
if (char == "a" || "e" || "i" || "o" || "u" || "A" || "E" || "I" || "O" || "U") {
    return true;
}
else {
    return false;
}

//5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:

var password = "mypasswordjs"
var userPassword = prompt("Enter your Password: ")
if (userPassword == "") {
    alert('Please enter your password!')
}
else if (password == userPassword) {
    alert("Correct!")
}
else {
    alert("Incorrect Password")
}


// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24  hours clock format
var time = prompt("What Time is it now!")
if (time >= 0000 && time < 1200) {
    alert("Good Morning!")
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!")
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening!")
}
else if (time >= 2100 && time < 2359) {
    alert("Good Night!")
} 
