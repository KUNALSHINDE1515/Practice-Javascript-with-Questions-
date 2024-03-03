// Creating Objects:

// How do you create an empty object in JavaScript?

const myO = {}
// console.log(myO);   // This way to create empty object

// What are the different ways to create objects in JavaScript?
const type1  = {
    name:"kunal",
    age:21,
    city:"pune"
}
// console.log(type1);

    function type2 (name, age, city) {
        this.name = name
        this.age = age
        this.city = city
    }
let check = new type2("shubham", 23, "saswad")
// console.log(check);

class type3 {
    constructor(name,city,salary){
        this.name = name;
        this.city = city;
        this.salary = salary;
    }
}

let check2 = new type3("Ajinkya", 'mumbai', 70000)
// console.log(check2);
// Accessing Properties:

// How do you access properties of an object in JavaScript?
console.log(type1.name); // frist method
// What is the difference between dot notation and bracket notation when accessing properties?
const diff  = {
    name:"kunal",
    age:21,
    city:"pune"
}
// let dotNotation = diff.name // hyachamadhe aplyala value hi . ne dyavi lagate
// let bracketNotations = diff["age"]  // htachyamandhe aplyala value he string madhe dyavi lagate
// Adding and Modifying Properties:

// How do you add a new property to an existing object?

diff.gender = "male"  //this is the way to add the propeties 
// How do you modify the value of an existing property in an object?
diff.city = "saswad";
// console.log(diff);
// console.log(diff);
// Removing Properties:

// How do you remove a property from an object?
delete diff.gender
// console.log(diff);

// Looping Through Object Properties:


// How do you loop through all the properties of an object?

for (const key in diff) {
    // console.log(diff);
    }

    Object.keys(diff).forEach(key =>{
        console.log(diff);
    })
// Object Methods:

// What are object methods in JavaScript? 

/**Functions as Properties: In JavaScript, functions can be defined as properties within an object. These functions become methods of the object.

Accessing Object Methods: Object methods can be accessed and invoked using dot notation (object.method()) or bracket notation (object['method']()).

This Keyword: Inside an object method, the this keyword refers to the object that the method belongs to. It allows the method to access and modify the object's properties.

Adding and Modifying Methods: You can add or modify object methods dynamically at runtime, just like any other property of the object. */


// How do you define a method for an object?
// Object Constructors:

// What is an object constructor in JavaScript?
// How do you create multiple instances of an object using a constructor function?
// Prototype Inheritance:

// What is prototype inheritance in JavaScript?
// How do you implement inheritance in JavaScript using prototypes?
// JSON (JavaScript Object Notation):

// What is JSON and how is it related to JavaScript objects?
// How do you convert a JavaScript object to a JSON string, and vice versa?
// Object Destructuring:

// What is object destructuring in JavaScript?
// How do you use object destructuring to extract values from an object?