// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = prompt("Enter any number")
document.write("Result:")
document.write("<br>")

document.write("The Value of a is: " + a)
document.write("<br>")
document.write("..........................................")
document.write("<br>")
document.write("<br>")
++a
document.write("The Value of ++a is: " + a)
document.write("<br>")
document.write("Now the value of a is : " + a)
document.write("<br>")
document.write("<br>")
document.write("The Value of a++ is: " + a)
document.write("<br>")
a++
document.write("Now the value of a is : " + a)
document.write("<br>")
document.write("<br>")
document.write("<br>")
--a
document.write("The Value of --a is: " + a)
document.write("<br>")
document.write("Now the value of a is : " + a)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("The Value of a-- is: " + a)
a--
document.write("<br>")
document.write("Now the value of a is : " + a)

// 2. What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1
document.write("a is:" + a)
document.write("<br>")
document.write("b is:" + b)
document.write("<br>")
result = --a - --b + ++b + b--
document.write("Result is:" + result)
document.write("<br>")

// 3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Please write your name here")
alert("Hi welcome to our website " + userName)

// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user  does not enter a new number, multiplication table of 5 should be displayed by default.
var x = prompt("Table of which number do you print")
for (var i = 1; i < 11; i++) {
    document.write(x + " " + "*" + " " + i + " " + "=" + " " + x * i)
    document.write("<br>")

    // 6. Take
    var subject1 = prompt("Enter First Subject Name ")
    var subject2 = prompt("Enter Second Subject Name ")
    var subject3 = prompt("Enter Third Subject Name ")
    var subject1totalmarks = 100, subject2totalmarks = 100, subject3totalmarks = 100
    var totalMarks = subject1totalmarks + subject2totalmarks + subject3totalmarks
    var subject1ObtainedMarks = prompt("How many numbers you got in first subject")
    var subject2ObtainedMarks = prompt("How many numbers you got in second subject")
    var subject3ObtainedMarks = prompt("How many numbers you got in thrid subject")
    var totalmarksobtained = subject1ObtainedMarks + subject2ObtainedMarks + subject2ObtainedMarks
    var percentage = (totalmarksobtained * 100) / totalMarks
    var table = document.getElementById('jstable')
    var row = table.insertRow(-1);
}