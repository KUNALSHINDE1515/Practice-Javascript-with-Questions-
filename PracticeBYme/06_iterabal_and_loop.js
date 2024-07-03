// Basic Functionality (Questions 1-5):

// Printing Numbers 1 to 10: Write a for loop that prints numbers from 1 to 10 (inclusive) to the console.

for(let i = 0; i <=10; i++){
    // console.log(`Printed Number: ${i}`);
}
// Counting Down from 10: Modify the previous code to print numbers from 10 down to 1 (inclusive).
// for(let i = 10; i >= 0; i--){
//     console.log(`Printed Number: ${i}`);
// }
// Skipping Every Other Number: Create a for loop that prints only even numbers from 2 to 20 (inclusive).

// const Number = 20;
// for(let i = 2; i <= Number; i+= 2){
//     console.log(i);
// }
// Printing Multiples of 3: Write a for loop that prints the first 10 multiples of 3 (starting from 3).

// for(let i = 3; i <=30; i+=3){
//     console.log(`Ressult: ${i}`);
// }
// Sum of Numbers: Develop a for loop that calculates the sum of all odd numbers from 1 to 19.

// let oddNumber = 20;
// for(let i = 0 ; i<= oddNumber; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }
// Array Iteration (Questions 6-10):

// Printing Array Elements: Construct a for loop that iterates through an array of fruits (e.g., ["apple", "banana", "orange"]) and logs each fruit to the console.
// const fruits = ["apple", "banana", "orange"]
// for(let element of fruits){
//     console.log(element);
// }
// Finding the Max: Create a for loop that finds the largest number in an array of integers (e.g., [5, 10, 2, 8]).

const largestNUmber = [5, 10, 2, 8]
let arrIndex = largestNUmber[0]

for (let i = 0; i < largestNUmber.length; i++) {

    if(largestNUmber[i] > arrIndex){
        arrIndex = largestNUmber[i]
    }
}
// console.log(arrIndex);
// Filtering Even Elements: Write a for loop that creates a new array containing only the even numbers from an original array of mixed numbers.

let newArr = [1,2,3,4,5,56,78,56,11,54,356,65,356,55,35,356,23,35,21]

for(let value of newArr){
    if(value % 2 ===0){
        console.log(`Even number of array is : ${value}`);
    }
}
// Reversing an Array: Develop a for loop that reverses the order of elements in an array (e.g., ["a", "b", "c"] becomes ["c", "b", "a"]).

const revseArr = ["a", "b", "c"]
revseArr.reverse()
console.log(revseArr);
// Replacing Elements: Create a for loop that replaces all occurrences of a specific value in an array with a new value.
// Advanced Concepts (Questions 11-15):

// Nested Loops: Write nested for loops to print a multiplication table (e.g., 1x1, 1x2, 2x1, 2x2, etc.).
// Infinite Loop: Explain how to create an infinite for loop in JavaScript and how to break out of it safely using break.
// Labeled Loops: Describe what labeled loops are and provide an example of their use in JavaScript.
// for...in vs. for...of: Distinguish between for...in and for...of loops and their appropriate use cases in JavaScript.
// Generators with for...of: Explain how to create a generator function in JavaScript and how it can be used with for...of loops.
// Challenge Questions (Questions 16-20):

// Prime Numbers: Write a for loop that identifies and prints the first 10 prime numbers. (Hint: Use divisibility checks)
// FizzBuzz: Create a for loop that implements the FizzBuzz logic (print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for both).
// Generating Fibonacci Sequence: Develop a for loop that generates the first N terms of the Fibonacci sequence (0, 1, 1, 2, 3, etc.).
// Array Shuffling: Write a for loop that implements a basic algorithm (e.g., Fisher-Yates shuffle) to randomly shuffle the elements of an array.
// Dynamic Looping: Create a for loop that takes a starting number, an ending number, and a step value as inputs and iterates within that range.