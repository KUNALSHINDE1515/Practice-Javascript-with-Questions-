// Datatypes:

// Identify the datatype:

// Given a variable age = 25, what is its datatype? (number)
let age = 25;
// console.log(typeof age);  // In js we can check the type of datatypes by typeof operetor.

// Given a string name = "Alice", what is its datatype? (string)

let name = "Alinnce"
// console.log(typeof name);       // srting


// Given a variable isStudent = true, what is its datatype? (boolean)

let isStudent = true 
// console.log(typeof isStudent);       bollean


// Given var x;, what is its datatype before assigning a value? (undefined)

let x;
// console.log(typeof x);

// Given var y = null;, what is its datatype? (object) (Note: This is a historical quirk in JavaScript)

let y = null; 
// console.log(typeof null);


// Create variables of different datatypes:

// Create a variable to store your full name (string).

let fullName = "kusnal Bharat shinde"
// Create a variable to represent your age (number).

let old = 22;

// Create a flag indicating if you're a student (boolean).

let inStock = true

// Create an empty array to store your favorite hobbies. 

let emptyArray = []
// console.log(typeof emptyArray);    // this also tell us object

// Create an object to represent a product with properties like name, price, and inStock.

let object = {
    name:"kunal",
    price:200,
    isname:true
}

// console.log(typeof object);
// console.log( object);


// Truthy and Falsy Values:

// Which values in JavaScript are considered falsy? (0, "", null, undefined, NaN)
// Write an if statement that checks if a variable is truthy.


// Type Conversion:

// Implicit Conversion (Coercion):

// What happens when you add a number and a string (e.g., 10 + "hello")? (The string is converted to a number, resulting in "10hello").
let check = 10 + "heloo"
// console.log( typeof check);  //output -- > 10heloo typeof string
// What happens when you multiply a boolean with a number (e.g., true * 5)? (The boolean is converted to 1 for true and 0 for false).

let b = true * 5
// console.log(typeof b);  // number typeof
// console.log(b);  //op --> 5
// Explain the difference between implicit conversion and explicit conversion. (Implicit happens automatically, while explicit is done using functions like Number(), String(), etc.)


// Explicit Conversion:

// Convert the number 123 to a string using String().

let convertNUmber = 123
// console.log( typeof convertNUmber);
let conversion = String(convertNUmber)
// console.log( typeof conversion);  // type of will be string
// Convert the boolean false to a number using Number(). (This will result in 0).

let trailing = true;
// console.log(typeof trailing); // bollean
let bcn = Number(trailing)
// console.log(typeof bcn);   // number
// Convert a string representing a number ("20") to a number using Number() or parseInt() (latter ignores trailing characters).

let superman = "20";
// console.log(typeof superman);
let sn = parseInt(superman)
// console.log(typeof sn);  // number
// Convert a string to lowercase or uppercase using toLowerCase() and toUpperCase().

let lc = "kunal bharat shinde";
let uc = lc.toUpperCase();
// console.log(uc);


// Type Checking:

// How can you check the datatype of a variable in JavaScript using the typeof operator?
// chech top code there are answer 
// Write a function that takes a value and returns its datatype.

function myfunction() {
    
}

console.log(typeof myfunction());



// Bonus:

// Truthy and Falsy Values in Comparisons:
// Explain why 0 == false evaluates to true, but 0 === false evaluates to false.


// JavaScript Type Coercions:

// Explore some common scenarios where JavaScript performs type coerci 

//  Best Practices for Type Handling:
// Discuss how to use strict mode ('use strict') to avoid unexpected type conversions and improve code clarity.
// Explain the advantages of using type annotations (available in modern JavaScript) to catch potential type errors early.
// Tips:

// Experiment with these concepts in your browser's console to see the results firsthand.
// Practice writing small functions that demonstrate type conversions and comparisons.
// Refer to the official JavaScript documentation for detailed information on datatypes and type conversion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures