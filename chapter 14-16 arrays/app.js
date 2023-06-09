//1. Declaration and intialization
var literalArr = [];
//var objectArr = new ("empty")
var stringArr = [""]
var numberArr = []
var boolArr = [true, false]
var mixedArr = ["hi", 5, true, , 1]
var qualificationArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"]
for (var i = 0; i < qualificationArr.length; i++) {
    console.log(qualificationArr[i])
    document.write("<br>")
}

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
var stdName = ["Ali", "Hamza", "Zain"]
var stdScore = [420, 380, 470]
var totalMarks = 500
var percentageOfStd1 = ((stdScore[0] * 100) / totalMarks)
var percentageOfStd2 = ((stdScore[1] * 100) / totalMarks)
var percentageOfStd3 = ((stdScore[2] * 100) / totalMarks)
document.write("Score of " + stdName[0] + " is " + stdScore[0] + ". " + "Percentage: " + percentageOfStd1 + "%")
document.write("<br>")
document.write("Score of " + stdName[1] + " is " + stdScore[1] + ". " + "Percentage: " + percentageOfStd2 + "%")
document.write("<br>")
document.write("Score of " + stdName[2] + " is " + stdScore[2] + ". " + "Percentage: " + percentageOfStd3 + "%")

// 9. Initialize an array with color names. Display the array elements in your browser.
// 9.
var colorNames = ["Yellow", " Brown", " Pink", " Orange", " Red"]
document.write(colorNames)

//a
var color = prompt("What color do you add in the starting of an array?")
colorNames.unshift(color)
document.write("<br>")
document.write(colorNames)

//b
var color = prompt("What color do you add in the ending of an array?")
colorNames.push(color)
document.write("<br>")
document.write(colorNames)
document.write("<br>")

// c
colorNames.unshift("Grey,", "White")
document.write(colorNames)
document.write("<br>")

//d 
colorNames.shift()
document.write(colorNames)
document.write("<br>")

// e
colorNames.pop()
document.write(colorNames)
document.write("<br>")

// f
var whichIndex = prompt("In which index you want to add a Color name ?")
var addColor = prompt("type a color name which you want to add in a array ? ")
colorNames.splice(whichIndex, 0, addColor);
document.write(colorNames)
document.write("<br>")

//g
var indexDelete = prompt("At which index you want to delete a Color name ?")
var howManyColors = prompt("how many colors you want to delete in an array ? ")
colorNames.splice(indexDelete, howManyColors,);
document.write(colorNames)
document.write("<br>")

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort  method.

var studentScore = [320, 230, 480, 120]
document.write("Scores of Students : " + studentScore + "<br>")
studentScore.sort();
document.write("Scores of Students : " + studentScore)

//11.Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities  array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
document.write(cities + "<br>")
var copied = cities.slice(2, 4)
var selectedCitiesArray = [copied]
document.write(selectedCitiesArray)
document.write("<br>")

//12. Write a program to create a single string from the  below mentioned array:
var arr = ["This ", " is ", " my ", " cat"];
var joinedArr = arr.join(" ");
document.write(joinedArr)

// 13.  (FIFO-First In First Out)
var devices = ["keyboard", "mouse", "printer", "monitor"]
document.write("Out: " + "<br>" + devices[0] + "<br>" + "Out: " + "<br>" + devices[1] + "<br>" + "Out: " + "<br>" + devices[2] + "<br>" + "Out: " + "<br>" + devices[3] + "<br>")

// 14. LIFP  (LIFO-Last In First Out)
var devices = ["keyboard", "mouse", "printer", "monitor"]
document.write("Out: " + "<br>" + devices[3] + "<br>" + "Out: " + "<br>" + devices[2] + "<br>" + "Out: " + "<br>" + devices[1] + "<br>" + "Out: " + "<br>" + devices[0] + "<br>")


// 15. Write a program to store phone manufacturers 
var phoneManufacturers = ["Apple", "Samsung", "Motrola", " Nokia", " Sony", "Haier"]