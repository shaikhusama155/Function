function date(dateAndTime) {
    console.log(dateAndTime)
}
date(new Date())

function greet(firstName, lastName) {
    console.log("Hey! " + firstName + " " + lastName)
}
greet(prompt("Enter first name"), prompt("Enter last name"))


function addNumbers() {
    let num1 = parseInt(prompt("Enter first number"));
    let num2 = parseInt(prompt("Enter second number"));
    let sum = num1 + num2;
    return sum;
}
let result = addNumbers();
console.log("The sum of two number is:" + result);

function calculator(num3, num4, operator) {
    let result1;
    if (operator === "add") {
        result1 = num3 + num4;
    }
    else if (operator === "minus") {
        result1 = num3 - num4;
    }
    else if (operator === "multiply") {
        result1 = num3 * num4;
    }
    else if (operator === "divide") {
        result1 = num3 / num4;
    }
    else {
        result1 = "Operator is Invalid";
    }
    return result1;
}
let num3 = +prompt("Enter number 1");
let num4 = +prompt("Enter number 2");
let operator = "add";
let result1 = calculator(num3, num4, operator)
document.write("The result of the operation is: " + result1 + "</br>")


function square(num) {
    return num * num;
}
let num = 5;
let result2 = square(num);
console.log("The square of " + num + " is " + result2);

function factorial(num5) {
    if (num5 == 0) {
        return 1;
    }
    else {
        return num5 * factorial(num5 - 1);
    }
}
let num5 = 5;
let result3 = factorial(num5);
console.log("The factorial of " + num + " is " + result3)


function count(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + " ")
    }
}
let start = 10;
let end = 25;
let counting = count(start, end);
count()



function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return Math.pow(num, 2);
    }

    var baseSquared = calculateSquare(base);
    var perpendicularSquared = calculateSquare(perpendicular);
    var hypotenuseSquared = baseSquared + perpendicularSquared;

    return Math.sqrt(hypotenuseSquared);
}

var hypotenuse = calculateHypotenuse(3, 4);
console.log(hypotenuse); // Output: 5


function calculateAreaByValue(width, height) {
    return width * height;
}
let area1 = calculateAreaByValue(4, 6);
console.log("The area by value " + area1)

function calculateAreaByVariable(width, height) {
    return width * height;
}

let areaWidth = 4;
let areaHeight = 6;
let area2 = calculateAreaByValue(areaWidth, areaHeight);
console.log("The area by variable " + area2)



function captilizeWord(str) {
    var words = str.split(' ')

    for (let i = 0; i < words.length; i++) {
        var word = words[i]
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }
    var capitilizeStr = words.join(' ');
    return capitilizeStr;
}
var str = "today is a beautiful day"
console.log(captilizeWord(str))



function longestWord(strg) {
    var letters = strg.split(' ');

    var mxlength = 0;
    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        if (letter.length > mxlength) {
            mxlength = letter.length;
        }
    }
    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        if (letter.length === mxlength) {
            return letter;
        }

    }
}

var strg = "Web Development tutorial"
console.log(longestWord(strg))




function countOccurrences(stng, letter) {
    let count = 0;

    for (let i = 0; i < stng.length; i++) {
        if (stng[i] === letter) {
            count++;
        }
    }

    return count;
}

let stng = "JSResourceS.com";
let letter = "o";
console.log(countOccurrences(stng, letter));



function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;

    console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);

    console.log("The area is " + area.toFixed(2));
}

calcCircumference(5);
calcArea(5);
