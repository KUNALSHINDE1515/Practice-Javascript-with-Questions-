// Basic Usage
// Calculate the sum of an array of numbers.

const myArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumArray = myArr.reduce( function (acc, curr) {
    return acc + curr
} ,0)
console.log(sumArray);

// Find the maximum or minimum value in an array.

const max = myArr.reduce((accumulator, currentValue) => {
    return accumulator < currentValue ? accumulator : currentValue;
  });
   
console.log(max);
// Concatenate all elements of a string array into a single string

const stringArray = ['hello', 'world', 'how', 'are', 'you'];

const result = stringArray.reduce( (acc,curr) => acc + curr)
console.log(result);



