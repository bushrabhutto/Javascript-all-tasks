// 1. Write a program that take two numbers & add them in a  new variable. Show the result in your browser.

var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var sum = firstNumber + secondNumber
document.write(" Sum of " + firstNumber + " and " + secondNumber + " is " + sum)
document.write("<br>")


// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// For Subtraction
var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var subtract = firstNumber - secondNumber
document.write(" Subtraction of " + firstNumber + " and " + secondNumber + " is " + subtract)
document.write("<br>")

// For Multiplication 
var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var Multiplication = firstNumber * secondNumber
document.write(" Multiplication of " + firstNumber + " and " + secondNumber + " is " + Multiplication)
document.write("<br>")

// Division
var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var Division = firstNumber / secondNumber
document.write(" Divsion of " + firstNumber + " and " + secondNumber + " is " + Division)
document.write("<br>")

// Modulus
var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var modulus = firstNumber % secondNumber
document.write(" Modulus of " + firstNumber + " and " + secondNumber + " is " + modulus)
document.write("<br>")
document.write("<br>")
document.write("<br>")

// 3. Do the following using JS Mathematic Expressions
var myAge = 23
document.write("Value after variable declaration is  " + myAge)
document.write("<br>")
myAge = 5
document.write('Initial Value is : ' + myAge)
document.write("<br>")
myAge++
document.write('Value after increment is  ' + myAge)
document.write("<br>")
myAge = myAge + 7
document.write("Value after addition is : " + myAge)
document.write("<br>")
myAge--
document.write('Value after decrement is  ' + myAge)
document.write("<br>")
myAge = myAge / 3
document.write("The reminder is : " + myAge)

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
var oneTicket = 600
var costOfFiveTickets = oneTicket * 5
document.write("Total Cost to buy  a 5 tickets to a movie is " + costOfFiveTickets + "PKR")

// 5. Write a script to display multiplication table of any  number in your browser.
var x = parseInt(prompt("Enter any number of your choice : "))
for (i = 1; i < 11; i++) {
    document.write(x + " " + "*" + " " + i + " " + "=" + " " + x * i)
    document.write("<br>")
}
// 6. The Temperature Converter:
var celsiusTemprature = prompt("Enter a Celsius Temparature")
var Fahrenheit = (celsiusTemprature * 9 / 5) + 32;
document.write(celsiusTemprature + "<sup>0</sup>C " + "is " + Fahrenheit + "<sup>0</sup>F")
document.write("<br>")
var FahrenheitTemprature = prompt("Enter a Fahrenheit Temparature")
var celsius = (FahrenheitTemprature - 32) * 5 / 9
document.write(FahrenheitTemprature + "<sup>0</sup>F " + "is " + celsius + "<sup>0</sup>C")
document.write("<br>")

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
var itemOnePrice = 650
var itemSecondPrice = 100
var itemOneQuantity = 3
var itemSecondQuantity = 7
var shippingCharges = 100
document.write("<h1>Shopping Cart</h1>")
document.write("price of item 1 is " + itemOnePrice)
document.write("<br>")
document.write("Quantity of item 1 is " + itemOneQuantity)
document.write("<br>")
document.write("price of item 2 is " + itemSecondPrice)
document.write("<br>")
document.write("Quantity of item 2 is " + itemSecondQuantity)
document.write("<br>")
document.write("Shipping charges " + shippingCharges)
document.write("<br>")
var totalCost = itemOnePrice * itemOneQuantity + itemSecondPrice * itemSecondQuantity + shippingCharges
document.write("Total cost of your order is : " + totalCost)

//  8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in  your browser
var totalMarks = 980
var MarksObtained = 804
var percentage = (MarksObtained * 100) / totalMarks;
document.write("Total Marks: " + totalMarks)
document.write("<br>")
document.write("Obtained Marks: " + MarksObtained)
document.write("<br>")
document.write("percentage: " + percentage + "%")

// 9. Currency in PKR
var usDollars = 10
var saudiRiyals = 25
usDollars = usDollars * 104.80
saudiRiyals = saudiRiyals * 28
totalCurrency = usDollars + saudiRiyals
document.write("<h1>Currency in PKR</h1>")
document.write("<br>")
document.write("<br>")
document.write("Total Currency in PKR: " + totalCurrency)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
var num = 35 + 5 * 10 / 2
document.write(num)

//11. Age Calculator
var currentYear = prompt("Enter Current year: ")
var birthYear = prompt("Enter birth year: ")
var age = currentYear - birthYear
document.write("Current year :" + currentYear)
document.write("<br>")
document.write("Birth year :" + birthYear)
document.write("<br>")
document.write("Your age is :" + age)

// 12.  The Geometrizer: Calculate properties of a circle.
var radius = prompt("What is the radius of a circle? ")
var circumference = 2 * (3.142) * radius
var area = 3.142 * radius * radius
document.write("<h1>The Geometerizer</h1>")
document.write("<br>")
document.write("Radius of Circle: " + radius)
document.write("<br>")
document.write("The Circumference is : " + circumference)
document.write("<br>")
document.write("The Area is: " + area)

// 13. The Lifetime Supply Calculator:
var favouriteSnack = "megy"
var currentAge = 22
var maximumAge = 40
var estimatedPerDay = 3
var needSnacks = (maximumAge - currentAge) * estimatedPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1>")
document.write("<br>")
document.write("Favourite Snack: " + favouriteSnack)
document.write("<br>")
document.write("Current Age " + currentAge)
document.write("<br>")
document.write("Estimated Maximum Age: " + maximumAge)
document.write("<br>")
document.write("Amount of snack pe day: " + estimatedPerDay)
document.write("<br>")
document.write("You will need " + needSnacks + " " + favouriteSnack + " to last you untill the ripe old age of " + maximumAge)
