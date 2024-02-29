// Certainly! Practicing with variables in JavaScript is essential for learning the language. Here are some variable-related exercises you can try:

// Declaration and Assignment:

// Declare a variable name and assign your name to it.

let name = "kunal";
// Declare another variable age and assign your age to it.

let age = 21;
// Variable Types:

// Declare a variable isStudent and assign it a boolean value indicating whether you are a student or not.
let isStudent = true
// Declare a variable favoriteFruits and assign it an array containing your top three favorite fruits.

const favoriteFruits = ["apple", "BAnana", "orange"]
// Manipulating Variables:

// Create a variable birthYear and calculate your birth year based on your age and the current year.
let currentyear = new Date().getFullYear()
const birthYear = currentyear - age;
// console.log(`This is my birth Year ${birthYear}`);
// Concatenate your name and age variables into a single string and assign it to a new variable 

const result = name + age
// console.log(result);

// bio Scope:

// Declare a variable globalVar outside of any function and assign it a value.

// let glv ;
// function assign() {
//     glv = "shinde"
//     console.log(glv);
// }

// assign()
// Declare a function localScope which declares a variable localVar inside it and assigns it a value. Try to access both globalVar and localVar from outside the function. What happens?
let check = "I am a global scope";
function myFunction(){
    let check = "I am local Scope"
    console.log(check); 
}

{
    var abcd = "deshmukh"
}
// console.log(abcd); // scope chya baher var access kele jau sakate but let ani const  functional scope chya baher acees kele jau sakat nahit tyamule var he keyword use kele jat nahi

// myFunction()   //// when we call the function output will be this
// console.log(check); // when we log a varible output is global scope

// Discuss the differences between var, let, and const in terms of scope. ----->

/* -----> Use var if you want function-scoped variables that can be hoisted. Use let if you want block-scoped variables that can be reassigned. Use const if you want block-scoped variables that are constant and cannot be reassigned. */

// Variable Naming Conventions:

// Declare a variable using camelCase naming convention.
const accountNumber = 123457896554
// Declare another variable using snake_case naming convention.

let mobile_number = 9958674814
// Discuss the importance of meaningful variable names and consistent naming conventions.  ------> 

/* ---->   Readability and Understandability: Clear and meaningful variable names make your code more readable and understandable. When someone, including yourself, reads the code later on, descriptive variable names make it easier to comprehend the purpose and intent of the variable. */


// Reassigning Variables:

let reassign = "kunal"
reassign = "shinde"
// console.log(reassign);

// Declare a variable currentCity and assign your current city to it.

let currentCity = "Pune"
// Reassign the currentCity variable to a new city where you would like to live someday.
currentCity = "mumbai";

// Variable Hoisting:

// Experiment with variable hoisting by declaring a variable after it has been used within a function. See if it still works.

// function hostingExample1() {
//     var host;
//     console.log(host);
//     host = "This is a hosting example in js"
// }

// function hostingExample() {
//     console.log(host); // Accessing the variable before declaration
//     var host = "This is a hosting example in js"
// }

// hostingExample()
// hostingExample1()




// Constants:

// Declare a constant variable PI and assign it the value of π (3.14).

const PI = 3.14;
// console.log(PI);
// Try to reassign a value to PI and observe what happens.
// PI = 3.85
// console.log(PI); // const varable doent not change value or reassign if once assign
// Object and Property Access:

// Create an object person with properties like name, age, gender, etc.

const obj = {
    name:"kunal",
    age:22,
    gender:"male"
}
// console.log(obj);
// Access and print different properties of the person object.

console.log(obj.name);
// console.log(obj.gender);


// Null and Undefined:

// Declare a variable without assigning any value to it and see what value it holds.

let asachKahitari ;
console.log(asachKahitari);
// // Discuss the difference between null and undefined.