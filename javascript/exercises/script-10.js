console.log("Callback functions JS loaded!");

// ======= Step 1: Higher-order and callback functions =======

// Convert anonymous arithmetic functions to arrow functions
const addTwoNums = (a, b) => a + b;
const subtractTwoNums = (a, b) => a - b;
const multiplyTwoNums = (a, b) => a * b;
const divideTwoNums = (a, b) => a / b;

// Higher-order function
function doCalculation(num1, num2, operation) {
    return operation(num1, num2);
}

// Test higher-order function with callbacks
console.log(doCalculation(10, 5, addTwoNums));       // 15
console.log(doCalculation(10, 5, subtractTwoNums));  // 5
console.log(doCalculation(10, 5, multiplyTwoNums));  // 50
console.log(doCalculation(10, 5, divideTwoNums));    // 2

// ======= Step 2: Callback functions as data receivers =======
function fetchUserAndGreet(callback) {
    const userName = "Alice";
    callback(userName);
}

const sayHello = userName => console.log(`Hello: ${userName}`);
const sayGoodbye = userName => console.log(`Goodbye: ${userName}`);

fetchUserAndGreet(sayHello);    // Hello: Alice
fetchUserAndGreet(sayGoodbye);  // Goodbye: Alice

// ======= Step 3: Inline callback functions =======
function showUserGreeting(callback) {
    const userName = "Alice";
    callback(userName);
}

// Inline arrow function
showUserGreeting(userName => console.log(`Hello inline: ${userName}`));

// ======= Step 4: .forEach() with callbacks =======
const arrUsers = [
    { firstName: "Maria", age: 25, city: "New York" },
    { firstName: "Bob", age: 30, city: "Los Angeles" },
    { firstName: "Charlie", age: 35, city: "Chicago" }
];

// Anonymous function as callback
const displayUserAnon = function(user) {
    console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);
};
arrUsers.forEach(displayUserAnon);

// Arrow function as callback
const displayUserArrow = user => console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);
arrUsers.forEach(displayUserArrow);

// Inline arrow function in .forEach()
arrUsers.forEach(user => console.log(`Inline: ${user.firstName}, ${user.age}, ${user.city}`));

// ======= Step 5: Exercises =======

// 1. processText main function with two callbacks
function processText(text, callback) {
    return callback(text);
}

const toUpperCase = text => text.toUpperCase();
const addExclamation = text => text + "!!!";

console.log(processText("hello world", toUpperCase));    // HELLO WORLD
console.log(processText("hello world", addExclamation)); // hello world!!!

// 2. transformArray doubles each number
function transformArray(arr, callback) {
    const result = [];
    arr.forEach(num => result.push(callback(num)));
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = transformArray(numbers, num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 3. .forEach() inline arrow function multiplying numbers by 5
[10, 20, 30].forEach(num => console.log(num * 5)); // 50, 100, 150
