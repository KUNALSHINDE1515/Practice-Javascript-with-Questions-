// Basic Array Manipulation:

// Create an array of 5 numbers and print the sum of all elements.
const n5 = [1,2,3,4,5,6,1,7,8,9,10]

// Create an array of names and access the element at index 2.
let index = n5[3]
// console.log(index);
// Add a new element to the end of an existing array.
// let newArr = n5.push(11,12);
// console.log(newArr);
// Remove the last element from an array.
let removel = n5.pop()
// console.log(n5)
// console.log(removel);
// Find the index of a specific element within an array.
// console.log(n5.indexOf(10));



// Check if a particular value exists within an array.
// console.log(n5.includes(45));

// Sort an array of numbers in ascending or descending order.
console.log(n5.reverse());
console.log(n5.sort());

// Sort an array of strings alphabetically.
// Find the minimum and maximum values in an array.
let check = Math.min(...n5)
let check2 = Math.max(...n5)
console.log(check);
console.log(check2);

// Remove duplicate elements from an array.
// Reverse the order of elements in an array.
// Extract a portion of an array (sub-array) using slice.
// Merge two sorted arrays into a single sorted array.
// Flatten a nested array (one or multiple levels deep) into a single-dimensional array.
// Bonus Challenge:

// Implement a custom function to shuffle the elements of an array randomly (without using built-in methods).