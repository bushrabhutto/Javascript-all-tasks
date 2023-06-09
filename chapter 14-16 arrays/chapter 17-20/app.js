// 1. Declare and initialize an empty multidimensional array
var multiArr = [[], [], []]

// 2. Declare and initialize a multidimensional array  representing the following matrix:
var multiArr = [[0, 1, 2, 3],
[1, 0, 1, 2],
[2, 1, 0, 1]]
document.write(multiArr[0] + "<br>" + multiArr[1] + "<br>" + multiArr[2] + "<br>")

//3 . Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++)
    document.write(i + "<br>")

// 4.  Write a program to print multiplication table of any  number using for loop. Table number & length should be  taken as an input from user.
var x = prompt("Enter a number to show its muliplication table:  ")
var y = prompt("Enter a number of length to show its muliplication table:  ")
document.write("Multiplication table of " + x + " Length " + y + " is " + "<br>")
for (var i = 1; i <= y; i++) {
    document.write(x + " * " + i + " = " + 2 * i + "<br>")
}

// 5. Write a program to print items of the following array  using for loop:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}

// 6. 
var numbering = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// a counting
document.write("Counting: " + numbering + "<br>")

// b. reverse
numbering.reverse();
document.write("Reverse counting: " + numbering + "<br>")

// c.   Even
for (var a = 0; a < numbering.length; a++) {
    if (a % 2 != 0) {
        document.write(numbering[a] + " ")
    }
}

// d. Odd
for (var a = 0; a < numbering.length; a++) {
    if (a % 2 == 0) {
        document.write(numbering[a] + " ")
    }
}
document.write("<br>")

//e.
for (var a = 0; a < numbering.length; a++) {
    if (a % 2 != 0) {
        document.write(numbering[a] + "k ")
    }
}

// 7.  Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. 
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var userSearch = prompt("Welcome to ABC bakery what do you want sir/ma'm ?")
for (var i = 0; i < bakeryItems.length; i++) {
    if (userSearch == bakeryItems[i]) {
        document.write(userSearch + " is available at index " + i + " in our bakery")
    }
}

// 8. Write a program to identify the largest number in the  given array.
var array = [24, 53, 78, 91, 12]
document.write("The largest number is : " + Math.max(...array))
document.write("<br>")

// // 9. . Write a program to identify the smallest number in the  given array.
var array = [24, 53, 78, 91, 12]
document.write("The smallest  number is : " + Math.min(...array))

// 10.  Write a program to print multiples of 5 ranging 1 to 100. 
for (i = 1; i <= 20; i++)
    document.write(i * 5 + "<br>")