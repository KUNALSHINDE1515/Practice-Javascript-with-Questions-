// Basic Object Creation and Access (Questions 1-5):

// Creating an Object: Write code to create an object representing a person with properties like name, age, and favoriteColor.

const person = {
    name: "Aditya",
    age: 21,
    favoriteLAnguage: "JAVA"
}
// Accessing Properties: Develop code to access and print the value of the favoriteColor property from the object created in question 1.

let result = person.favoriteLAnguage
console.log(`Aditya faviourate coding language  is ${result}`);

// Adding Properties: Write code to add a new property named occupation to the object created in question 1 and assign it a value.

person.occupution = "student";

// console.log(person);

// Modifying Properties: Create code to modify the value of the age property in the object from question 1.

person.age = 23
// console.log(person);
// Deleting Properties: Develop code to delete the favoriteColor property from the object in question 1.

// delete person.favoriteLAnguage;
// console.log(person);
// Object Iteration and Methods (Questions 6-10):

// Listing Object Properties: Write code to iterate through all properties of an object and log their names and values to the console. (Hint: Use for...in loop)

for(const key in person){
    console.log(`properties: ${key}  value :${person[key]}`);
}
// Checking for Properties: Create code to check if a specific property (e.g., occupation) exists in an object.
let check = "occupution" in person
console.log(check);
// Object Methods: Write code to create a method for the object in question 1 that greets the user by name (e.g., greet() method).
// Calling Object Methods: Develop code to call the greet() method created in question 8 to print a greeting message.
// Object Destructuring: Write code to destructure properties from an object (e.g., name and age) into separate variables.
// Advanced Object Concepts (Questions 11-15):

// Object Literals vs. Constructors: Explain the difference between creating objects using object literals and constructor functions in JavaScript.
// Object Inheritance: Describe the concept of object inheritance in JavaScript and provide an example of how to create a child object that inherits properties from a parent object.
// Prototype Chain: Explain the prototype chain in JavaScript and how it's used for property lookup in objects.
// Cloning Objects: Write code to create a shallow copy of an object (copying only the top-level properties) and a deep copy (copying nested properties as well).
// Object Comparison: Explain how object comparison works in JavaScript (shallow vs. deep comparison) and provide examples for both.
// Challenge Questions (Questions 16-20):

// Building a Book Object: Create an object representing a book with properties like title, author, ISBN, and methods to get a summary or check availability.
// Shopping Cart Object: Develop an object that represents a shopping cart with functionalities to add items (products with name, price, quantity), calculate total cost, and remove items.
// Simple Address Book: Write code to create an object that acts as a simple address book, storing information for multiple contacts (name, phone number, email).
// Building a To-Do List: Develop an object-oriented approach to create a simple to-do list with functionalities to add tasks, mark tasks as complete, and display the list.
// Implementing a Bank Account: Create an object representing a bank account with functionalities for deposit, withdrawal, and balance checking. Implement security measures like password verification for access.