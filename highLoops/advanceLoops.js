// forEach
// Iterate over an array and print each element.

const myArray = [1,2,3,4,5,6]
myArray.forEach( function (each) {
    // console.log(each);
    
})
// Calculate the sum of all elements in an array.

const numsArray = [1,2,3,4,5,6,80,8,9,10]
let sum = 0;
 numsArray.forEach( (item) => {
     sum = item + sum
     
} )
// console.log(sum);


// Find the maximum value in an array.
let max = 0
numsArray.forEach( (nums) => {
    if (nums > max) {
        max = nums
    }
    
})

console.log(max);


// Find the minimum value in an array.

// let minimum = numsArray[0]
// numsArray.forEach( (nums) => {
//   if (nums < numsArray) {
//     numsArray = nums
//   }
    
// })

// console.log(minimum);

// Check if a given element exists in an array.
let found = false
numsArray.forEach( (item) => {
    if (item === 1) {
        found = true
    }
    return found
})
console.log(found);

// Create a new array by copying all elements from an existing array.
const newArray = []
myArray.forEach( (val) => {
    newArray.push(val)
})
// console.log(newArray);

// Reverse an array in-place using forEach.
// let newArr = []
let myArr = []
newArray.forEach( function (item) {
    myArr.push(item)
})

// console.log(myArr.reverse());
// console.log(newArr);

// Create a new array containing only even numbers from an existing array.
newArray.forEach( (nums) => {
    if (nums % 2 !== 0) {
        console.log(nums);
        
    }
})

// Create a new array containing only strings from an existing array.
const arrNew = [1, 2, 3, 4, "shinde", "deshmukh"]
arrNew.forEach( function (each) {

    if (typeof each == "string") {
        console.log(each);   
    }
    // console.log(each.toString());
    

})

// Create a new array containing the squares of all elements in an existing array.
const squareArr = [2, 4, 6, 8, 10]
let squareNewArr = []
squareArr.forEach( function (nums) {
    squareNewArr.push(nums * 2) 
})
console.log(`The suare of all emenets ${squareNewArr}`);

// map

// Create a new array containing the uppercase versions of all strings in an existing array.

const lowArr = ["banana", "apple", "mango", "orange", "chiko"]
lowArr.map( (item) => {
    console.log(item.toLocaleUpperCase());
}) 
// Create a new array containing the lengths of all strings in an existing array.
lowArr.map( (item) => {
    item.length
})
// Create a new array containing the square roots of all numbers in an existing array.
// Convert an array of objects to an array of strings, extracting a specific property.
// Apply a discount to all prices in an array of products.
// Convert a Fahrenheit temperature array to Celsius.
// Create a new array containing the first letter of each word in a sentence.
// Create a new array containing the last names of people in an array of objects.
// Create a new array containing the even-indexed elements of an existing array.
// Create a new array containing the odd-indexed elements of an existing array.
// reduce
// Calculate the product of all elements in an array.
// Calculate the average value of all elements in an array.
// Find the most frequent element in an array.
// Flatten a nested array.
// Group elements in an array by a property.
// Calculate the total price of a shopping cart.
// Count the occurrences of each element in an array.
// Find the longest word in a sentence.
// Calculate the factorial of a number using reduce.
// Implement a custom sum function using reduce.
// filter
// Create a new array containing only numbers greater than a given threshold.
// Create a new array containing only strings that start with a specific letter.
// Create a new array containing only objects with a specific property value.
// Remove duplicate elements from an array.
// Find all prime numbers within a given range.
// Filter out elements that are not truthy.
// Find all elements that are divisible by a given number.
// Filter out elements that are not unique.
// Filter out elements that are not palindromes.
// Filter out elements that are not valid email addresses.