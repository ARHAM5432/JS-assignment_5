//Assignment 4

// Task 1 🔍

var studentName = [];

console.log(studentName);

// Task 2 📝

var studentName = {
    names: []
};

console.log(studentName);

// Task 3 🌆

var stringArray = ["Karachi", "Lahore", "Multan"];
console.log(stringArray);

// Task 4 🔢
var numberArray = [1, 2, 3, 4, 5, 6];
console.log(numberArray);

// Task 5 ✅
var booleanArray = [true, false];
console.log(booleanArray);

// Task 6 🎯
var mixedArray = ["Arhum", 37, true, [1, 2, 3]];
console.log(mixedArray);

// Task 7 🎓

var heading = "Qualification";
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>" + heading + "</h1>");
document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br>");

// Task 8 🎯

var names = ["Michael", "John", "Tony"];
var marksObtained = [320, 230, 480];
var totalMarks = 500;

document.write("Score of " + names[0] + " is " + marksObtained[0] + ". Percentage: " + ((marksObtained[0] / totalMarks) * 100) + "%<br>");
document.write("Score of " + names[1] + " is " + marksObtained[1] + ". Percentage: " + ((marksObtained[1] / totalMarks) * 100) + "%<br>");
document.write("Score of " + names[2] + " is " + marksObtained[2] + ". Percentage: " + ((marksObtained[2] / totalMarks) * 100) + "%<br>");

// Task 9 🎨

var colors = ["Red", "Green", "Blue"];
var originalColor = colors.slice();

// a) Add a color to the beginning
var beginColor = prompt("Which Color Do you want to add to the beginning?");
if (beginColor) {
    colors.unshift(beginColor);
} else colors;

document.write("<h1>Original Color</h1><br>" + originalColor + "<br>");
document.write("<h3>Beginning color is</h3><h1>" + colors[0] + "</h1>" + colors);

// b) Add a color to the end
var endColor = prompt("Which Color Do you want to add to the end?");
if (endColor) {
    colors.push(endColor);
} else colors;

document.write("<h3>Ending color is</h3><h1>" + colors[colors.length - 1] + "</h1>" + colors);

// c) Add two colors at the beginning
var firstColor = prompt("Which first color do you want to add to the beginning?");
var secondColor = prompt("Which second color do you want to add to the beginning?");

if (firstColor && secondColor) {
    colors.splice(0, 0, firstColor, secondColor);
} else {
    "try Again";
}

document.write("<h3>Two more added colors are</h3><h1>" + colors[0] + ", " + colors[1] + "</h1>" + colors);

// d) Remove first color
var initialColor = colors[0];
var delColor = colors.shift();

document.write("<h3>Removed color from start is</h3><h1>" + delColor + "</h1>" + colors);

// e) Remove last color
var lastColor = colors[colors.lengt - 1];
var lastColor = colors.pop();

document.write("<h3>Removed color from end is</h3><h1>" + lastColor + "</h1>" + colors);

// f) Add a color at a specific position
var position = +prompt("At which position do you want to add a color?");
var addColor = prompt("Which color do you want to add at position " + position + "?");

if (!isNaN(position) && position >= 0 && position <= colors.length) {
    colors.splice(position - 1, 0, addColor);
    document.write("<h3>Your added color is</h3> <h1>" + addColor + "</h1><h3> at position</h3> <h1>" + position + "</h1><br>");
}

document.write(colors);

// g) Remove colors from a specific position
var deleteIndex = +prompt("At which index do you want to delete colors?");
var deleteCount = +prompt("How many colors do you want to delete?");

if (!isNaN(deleteIndex) && !isNaN(deleteCount) && deleteIndex >= 0 && deleteIndex < colors.length) {
    if (deleteCount > 0 && deleteIndex + deleteCount <= colors.length) {
        var removedColors = colors.splice(deleteIndex - 1, deleteCount);
        document.write("<h3>Removed colors are:</h3><h1>" + removedColors.join(", ") + "</h1><h3> from position</h3>" + deleteIndex);
    } else {
        alert("Number of colors to delete exceeds the available colors from the index " + deleteIndex);
    }
}

document.write("<h3>Remaining colors are</h3><h1>" + colors.join(", ") + "</h1>");

// Task 10 🎯

var score = [320, 120, 480, 230];
var ordered = score.slice().sort();
document.write("<h1>Scores of Students : " + score + "</h1>");
document.write("<h1>Ordered Scores of Students : " + ordered + "</h1>");

// Task 11 🏙️

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selected = cities.slice(2, 4);

document.write("<h1> Cities list : </h1><h3> " + cities + "</h3>");
document.write("<h1> Selected Cities : </h1><h3> " + selected + "</h3>");

// Task 12 🐾

var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

document.write("<h1> Array : </h1><h3> " + arr + "</h3>");
document.write("<h1> String : </h1><h3> " + singleString + "</h3>");

// Task 13 🖥️

var fifo = ["keyboard", "mouse", "printer", "monitor"];

document.write("<h1>Devices:</h1>" + "<h2>" + fifo + "</h2>");

var first = fifo.shift();
document.write("<h1>Out:</h1>" + "<h2>" + first + "</h2>");
document.write("<h1>Remaining Devices:</h1>" + "<h2>" + fifo + "</h2>");

var second = fifo.shift();
document.write("<h1>Out:</h1>" + "<h2>" + second + "</h2>");
document.write("<h1>Remaining Devices:</h1>" + "<h2>" + fifo + "</h2>");

var third = fifo.shift();
document.write("<h1>Out:</h1>" + "<h2>" + third + "</h2>");
document.write("<h1>Remaining Devices:</h1>" + "<h2>" + fifo + "</h2>");

var fourth = fifo.shift();
document.write("<h1>Out:</h1>" + "<h2>" + fourth + "</h2>");
document.write("<h1>Remaining Devices:</h1>" + "<h2>" + fifo + "</h2>");

// Task 14 🔄

var lastInFirstOut = ["keyboard", "mouse", "printer", "monitor"];

document.write("<h1>Devices:</h1>" + "<h2>" + lastInFirstOut + "</h2>");

var first = lastInFirstOut.pop();
document.write("<h1>Out:</h1>" + "<h2>" + first + "</h2>");
document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lastInFirstOut + "</h2>");

var second = lastInFirstOut.pop();
document.write("<h1>Out:</h1>" + "<h2>" + second + "</h2>");
document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lastInFirstOut + "</h2>");

var third = lastInFirstOut.pop();
document.write("<h1>Out:</h1>" + "<h2>" + third + "</h2>");
document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lastInFirstOut + "</h2>");

var fourth = lastInFirstOut.pop();
document.write("<h1>Out:</h1>" + "<h2>" + fourth + "</h2>");
document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lastInFirstOut + "</h2>");

// Task 15 📱

var developers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h1>Drop Down / Select Menu</h1><Select>"
    + "<option>Select</option>"
    + "<option>" + developers[0] + "</option>"
    + "<option>" + developers[1] + "</option>"
    + "<option>" + developers[2] + "</option>"
    + "<option>" + developers[3] + "</option>"
    + "<option>" + developers[4] + "</option>"
    + "<option>" + developers[5] + "</option>"
    + "</select>");
