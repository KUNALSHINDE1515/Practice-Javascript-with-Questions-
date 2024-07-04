// Basic Functions:

// Greeting: Write a function greet(name) that takes a name as input and returns a greeting message like "Hello, there, [name]!". Call the function with different names.
function greet(name){
    return name
}
console.log(greet("kunal"));
// Sum: Create a function add(num1, num2) that adds two numbers and returns the result. Test it with various numbers.

function addTwoNUmber(num1, num2){
    //  console.log(num1 + num2);
}
// addTwoNUmber(5,80)

function addTwoNUmber1(num1, num2){
    return num1 + num2
}
// console.log(addTwoNUmber1(5,88));
// let addtion = addTwoNUmber1(88,99)
// console.log(addtion);

// FizzBuzz: Implement a function fizzBuzz(number) that prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5. Otherwise, it prints the number itself. Loop from 1 to a chosen limit (e.g., 100) and call the function for each number.

function fizzBuzz(number){
    if (number % 3 === 0 && number % 5 ===0) {
        console.log(`${number} : FizzBuzz`)
    }else if(number % 3 === 0){
        console.log(`${number} : Fizz`);
    }else if(number % 5 === 0){
        console.log(`${number} :Buzz`);
    }else{
        console.log(`${number}`);
    }
}


// for(let i = 1; i <=100; i++){
//     fizzBuzz(i)
// }



// Working with Strings:

// Reverse String: Write a function reverseString(str) that reverses a given string. Try "hello" and "racecar" (a palindrome).

function str(name){
  let newString = '';

  for(let i = name.length -1; i>=0; i--){
    newString += name[i]
  }

  return newString;
}
let original = "shinde"
console.log(original);
let Reverse = str(original)
console.log(Reverse);

// Capitalize the First Letter: Create a function capitalizeFirstLetter(str) that capitalizes the first letter of a string and returns the modified string. Test with different sentences.

function capitalizeFirstLetter(str){
    let letter = "deshmukh"
    letter[0].toUpperCase()
    console.log(letter);
}
capitalizeFirstLetter()
// Is Vowel: Implement a function isVowel(char) that checks if a character is a vowel (a, e, i, o, u) and returns true or false. Test with various letters.
// Working with Numbers:

// Is Even: Write a function isEven(number) that determines if a number is even and returns true or false. Try positive, negative, and zero values.
// Find the Maximum: Create a function findMax(num1, num2, num3) that finds the largest of three numbers and returns it. Test with different sets of numbers.
// Calculate Area: Implement a function calculateArea(shape, dimensions) that calculates the area based on the shape (e.g., "square", "rectangle", "circle") and corresponding dimensions. Handle different shapes with appropriate calculations.
// Bonus Challenges:

// Guessing Game: Create a function-based guessing game where the user tries to guess a random number within a set range (e.g., 1-100). Provide feedback on each guess (too high, too low, or correct).
// Rock-Paper-Scissors: Develop a function-driven Rock-Paper-Scissors game against the computer. Allow the user to choose their move and implement logic to determine the winner.
// Simple Calculator: Build a basic calculator function that takes two numbers and an operator (+, -, *, /) as arguments and performs the calculation, returning the result. Consider error handling for invalid inputs.
// Tips: