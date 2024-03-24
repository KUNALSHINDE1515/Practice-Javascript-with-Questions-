// Write a regular JavaScript function called add that takes two parameters a and b, and returns the sum of a and b.

function add(a ,b) {
    return a + b;
}

let result = add(25,58)
console.log(result);
// Convert the add function from question 1 into an arrow function.

add()
// Write a regular JavaScript function called isEven that takes a parameter num and returns true if num is even, and false otherwise.
function isEven(num) {
    if (num % 2 == 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}
isEven(4)
// Convert the isEven function from question 3 into an arrow function.

 isEven = (num) => {
    if (num % 2 == 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}
isEven(5)
// Write a regular JavaScript function called greet that takes a parameter name and returns a greeting message like "Hello, [name]!".

function greet(name) {
    return "hello ," + name;
}
const resultg = greet("kunal");
console.log(resultg);
// Convert the greet function from question 5 into an arrow function.

 greet((name) => {
    return "hello ," + name;
 }) 
console.log(greet("ks")); 


//Write a regular JavaScript function called calculateArea that takes two parameters length and width and returns the area of a rectangle (length * width).

// Convert the calculateArea function from question 7 into an arrow function.

// Write a regular JavaScript function called printNumbers that takes a parameter n and prints the numbers from 1 to n (inclusive) to the console.

// Convert the printNumbers function from question 9 into an arrow function