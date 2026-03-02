// =======================
// Anonymous & Arrow Functions Practice
// =======================

// Test connection
console.log("JS file is connected!");


// ======== ANONYMOUS FUNCTIONS ========

// Basic anonymous function
// Basic anonymous function
const showGreeting = function() {
    console.log('Hello from anonymous function');
};
showGreeting();

// Arithmetic functions
const addTwoNums = function(num1, num2) { return num1 + num2; };
const subtractTwoNums = function(num1, num2) { return num1 - num2; };
const multiplyTwoNums = function(num1, num2) { return num1 * num2; };
const divideTwoNums = function(num1, num2) { return num1 / num2; };

console.log(addTwoNums(8,2)); // 10
console.log(subtractTwoNums(8,2)); // 6
console.log(multiplyTwoNums(8,2)); // 16
console.log(divideTwoNums(8,2)); // 4


// Passing function as argument (calculator-style)
function doCalculation(num1, num2, operation) {
    return operation(num1, num2);
}

console.log(doCalculation(10, 5, addTwoNums));        // 15
console.log(doCalculation(10, 5, subtractTwoNums));   // 5
console.log(doCalculation(10, 5, multiplyTwoNums));   // 50
console.log(doCalculation(10, 5, divideTwoNums));     // 2

// ======== ARROW FUNCTIONS ========

// Basic arrow function
const helloFromArrow = () => console.log("Hello from arrow function");
helloFromArrow();

// Arrow function with one parameter
const greetNoParen = name => `Hello, ${name}!`;
console.log(greetNoParen("Mary"));

// Arrow function multiple parameters
const finalPrice = (price, tax) => price + (price * tax);
console.log(finalPrice(50, 0.2)); // 60

// Single-statement arrow functions
const double = x => x * 2;
console.log(double(10)); // 20

const isPositive = num => num > 0;
console.log(isPositive(5)); // true

// ======== IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) ========

// Anonymous IIFE
(function() {
    console.log("Hello from immediately-invoked anonymous function");
})();

// Arrow IIFE with parameters
((name, age) => {
    console.log(`Processing ${name}, age ${age}`);
})('John', 30);


// 1. Format name
const formatName = function(firstName, lastName) {
    return `${firstName} ${lastName.toUpperCase()}`;
};
console.log(formatName("John", "Doe")); // John DOE

// 2. Average of 3 numbers
const calculateAverage = function(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
};
console.log(calculateAverage(5, 10, 15)); // 10

// 3. Rectangle area IIFE
(function(width, height) {
    console.log("Rectangle area:", width * height);
})(10, 5);

// 4. Arrow functions with multiple parameters
const combineWords = (word1, word2) => word1 + " " + word2;
console.log(combineWords("Hello", "World")); // Hello World

const calculateArea = (width, height) => width * height;
console.log(calculateArea(5, 10)); // 50

const calculateVolume = (width, height, depth) => width * height * depth;
console.log(calculateVolume(2, 3, 4)); // 24

// 5. Convert anonymous functions to arrow functions
const sayHelloUser = () => "Hello!";
const squareNum = x => x * x;
const isEmptyStr = str => str.length === 0;

console.log(sayHelloUser()); // Hello!
console.log(squareNum(5)); // 25
console.log(isEmptyStr("")); // true
