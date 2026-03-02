console.log("Hello from external JS file.")

// Declaring and assigning values to variables on single line
let userEmail = "abcd@email.com";
console.log(userEmail); // Outputs: abcd@email.com
let userPassword = "banana42%";
console.log(userPassword); // Outputs: banana42%
// Do NOT put quotes around a variable name in console.log()
console.log("userPassword"); // Outputs: userPassword

// Working with numeric variables	
let orderQty = 42;
let productPrice = 9.99;
console.log(orderQty); //should display 42

// Mixing literals and variables
const customerFirstName = "Marie";
const accBalance = 10;
		
// Using template literals
console.log(`Hi ${customerFirstName}. Your balance is €${accBalance}.`); 
// Outputs: Hi Marie. Your balance is €10.

let var1 = "Joe Bloggs";
let var2 = 1000.24;
console.log(`hello ${var1}. Your bank balance is : €${var2}`);

// Checking the data type of a variable
let someVar = ""; // declare empty variable 

someVar = "12"; // assign string to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: string 

someVar = 12;  // assign number to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: number 

someVar = "12"; // assign string to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: string - again!

someVar = true; // assign boolean to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: boolean

someVar = null; // assign null to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: object (an error in JavaScript)

someVar = 24; // assign number to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: number - again!


// Using [] notation to access position of characters within string
let myStr6 = "Hello, World!";
console.log(`Position [0]: ${myStr6[0]};`)   // H
console.log(`Position [5]: ${myStr6[5]};`)   // ,
console.log(`Position [6]: ${myStr6[6]};`)   // whitespace
console.log(`Position [7]: ${myStr6[7]};`)   // W
console.log(`Position [12]: ${myStr6[12]};`) // !

// ======== CHECKING STRING CONTENT ========
// String length  
console.log(myStr6.length); // 13

// ======== ASSIGN NUMBERS TO VARIABLES ========
const myVar1 =  1234;    // JavaScript treats myVar1 as a number
const myVar2 = "1234";;  // JavaScript treats myVar2 as a string
const myVar3 = '1234';   // JavaScript treats myVar3 as a string
const myVar4 = `1234`;   // JavaScript treats myVar4 as a string
console.log(`${myVar1} ${myVar2} ${myVar3} ${myVar4}`); // 1234 1234 1234 1234

// Arithmetic with JavaScript
const firstNum = 12;
const secondNum = 8;
console.log(`Addition (12+8): ${firstNum + secondNum}`);       // 20
console.log(`Subtraction (12-8): ${firstNum - secondNum}`);    // 4
console.log(`Multiplication (12*8): ${firstNum * secondNum}`); // 96
console.log(`Division (12/8): ${firstNum / secondNum}`);       // 1.5