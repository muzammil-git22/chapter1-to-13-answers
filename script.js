//qno1
var input = prompt("Enter a single character:");
var charCode = input.charCodeAt(0); 
document.writeln("Character code:", charCode);
if (charCode >= 48 && charCode <= 57) {
    document.writeln("You entered a number.");
} else if (charCode >= 65 && charCode <= 90) {
    document.writeln("You entered an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
    document.writeln("You entered a lowercase letter.");
} else {
    document.writeln("You entered a special character or something else.");
}
//qno2
var num1 = parseInt(prompt("Enter first integer:"));
var num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    document.writeln("The larger number is: " + num1);
} else if (num2 > num1) {
    document.writeln("The larger number is: " + num2);
} else {
    document.writeln("Both numbers are equal.");
}
//qno 3
var number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

//qno4
var char = prompt("Enter a single character:").toLowerCase();

if (char.length === 1) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        document.writeln(true);
    } else {
        document.writeln(false);
    }
} else {
    document.writeln("Please enter only one character.");
}
//qno5
var correctPassword = "mypassword123";  

var userPassword = prompt("Enter your password:");  
if (!userPassword) {
    alert("Please enter your password");  
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password"); 
} else {
    alert("Incorrect password");  
}
//qno6
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.writeln(greeting); 

//qno7
var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7PM):");

if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Invalid time. Please enter time in 24-hour format (e.g., 0900, 1400).");
}


