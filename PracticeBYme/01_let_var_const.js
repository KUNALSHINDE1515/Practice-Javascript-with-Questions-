//  here the task grom google ai

// Basic Declaration and Initialization:

// Declare a variable named firstName and assign your first name to it.

// let firstName;
let firstName = "kunal shinde";
// console.log(firstName);
// Declare a variable named age and initialize it with your current age (as a number).
let age = 21;
// Create a variable named isStudent and set it to true if you are a student, or false otherwise.
let isStudent = true
// Declare a variable favouriteColor and leave it uninitialized for now.

let favouriteColor = "black";



// Variable Naming and Case Sensitivity:

// What are the valid characters for naming variables in JavaScript? Can you use spaces or special characters?

// Is JavaScript case-sensitive for variable names? Demonstrate with an example.
// yes
// Explain the difference between firstName, FirstName, and FIRSTNAME in JavaScript.
// these are each variable is another






// Data Types and Scope:

// Declare a variable named height to store your height in meters (as a decimal number). What data type would you use?
let height = 21.4
// console.log(typeof height);      it return number
// Create a variable fullName that combines firstName and lastName (assuming lastName is already declared).

let fullName ;
// Using the let keyword, declare a variable course inside a function named getCourse. Can this variable be accessed outside the function? Why or why not?
{
    let course = "block scope";
}
// console.log(course);   //here the output will be not defined because of block scope.

// Explain the difference between var, let, and const in terms of scope and mutability.

// let -- > provide block scope and that value changed once declared.
// const --> it also provive block scope but once value declared that value does not chnaged

// let and const not suprted hosting
// var --> var are not provided block scoope and he is supporting hosting

// hosting means
kunal = 5;
var kunal;
console.log(kunal); // here will take output 5

// lets check hosting for let

shinde = 10;
// let shinde;
// console.log(shinde);    //In this situation the compailer show the error --> Cannot access 'shinde' before initialization


// let check hosting for const
bharat = 10;
// const bharat ;
// console.log(bharat);    //In this situation the compailer show the error --> Cannot access 'shinde' before initialization



// Variable Reassignment and Best Practices:

// Change the value of favouriteColor to "blue" using reassignment.

favouriteColor =  "bhue";
console.log(favouriteColor);
// Explain why using const is generally preferred over let for variables whose values won't change.
// List some best practices for naming variables in JavaScript to improve code readability.



// Bonus Challenge:

// Create an array named fruits to store your favorite fruits. Initialize it with at least three fruit names.

const fruit = ["orange" , "apple" , "banana" , "watermelon"]
// Access and print the second element of the fruits array.
console.log(fruit[2]);
// Add a new fruit to the end of the fruits array.
fruit.push("chi-ko");
console.log(fruit);
// Remember to use an online JavaScript console or a code editor to experiment with these practice questions. You can find resources for setting up a JavaScript development environment online.


// Additional Tips:

// Use descriptive variable names that reflect their purpose.
// Avoid using reserved keywords in JavaScript for variable names (e.g., if, else, for).
// Consider using constants (const) when the value won't change throughout the program.
// Be mindful of variable scope to prevent unintended conflicts.
// By practicing these concepts and adhering to best practices, you'll gain a solid foundation for working with variables in JavaScript.

