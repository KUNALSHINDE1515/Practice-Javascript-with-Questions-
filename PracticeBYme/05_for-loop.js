// Basic Iteration:

// Print the numbers from 1 to 10.
// for(let i = 1; i <= 10; i++){
//     console.log(`This is a number : ${i}`);
// }


// Print the numbers from 20 down to 1.
// for(let i = 20; i >1; --i ){
//     console.log(`This is a number down : ${i}`);
// }
// Print only the even numbers between 1 and 20 (inclusive).

// for(let i = 2; i < 20; i= i+ 2){
//     console.log(i);
// }

// Print only the odd numbers between 1 and 25 (inclusive).
// let number = 25
// for(let i = 1; i <= number; i+=2 ){
    
//     console.log(i);
// }
// Array Manipulation:

// Create an array of numbers from 1 to 5. Print the sum of all the elements in the array.
// let arr = [1,2,3,4,5]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
    
// }
// Create an array of fruits: ["apple", "banana", "orange"]. Print each fruit on a new line.
// let fruit = ["apple", "banana", "orange"]

// for(let i = 0; i<fruit.length; i++){
//     let result = fruit[i]
//     console.log(result);
// }
// Given an array of numbers, find the largest element.

// let largestNUmber =[1,2,3,4,8,9,24,88,77,99,]
// let arrIndex = largestNUmber[0]

// for(let i = 0; i < largestNUmber.length; i++){
    
//     if(largestNUmber[i] > arrIndex){
//        arrIndex = largestNUmber[i]
//     }
// }
// console.log(arrIndex);


// let array = [24,67,8,95,441,,41,23,5,]
// let arrayIndex = array[0]

// for (let i = 0; i < array.length; i++) {
    
//     if (array[i] > arrayIndex) {
//         arrayIndex= array[i]
//     }
    
// }
// console.log(arrayIndex);

// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest ) {
//     largest = arr[i];
//   }
// }
// console.log(largest);



// Given an array of numbers, find the smallest element.
// let array = [88,78,45,96,33,22,55,65,,45,21,211]
// let arrayAsmalest = array[0]

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < arrayAsmalest) {
//         arrayAsmalest = array[i];
//     }
    
// }
// console.log(arrayAsmalest);
// String Manipulation:

// Write a program that reverses a string (e.g., "hello" becomes "olleh").
// Write a program that checks if a string is a palindrome (reads the same backward as forward). (e.g., "racecar" is a palindrome).
// Challenge Problems:

// Write a program that prints the Fibonacci sequence up to a certain number (0, 1, 1, 2, 3, 5, etc.).
// Write a program that simulates a simple dice roll. Generate a random number between 1 and 6 and print the result.
// Bonus:

// Explore nested for loops. Print a multiplication table for a given number.
// Use the break statement to exit a loop prematurely. Print only the first 5 even numbers between 1 and 20.