// Basic Array Operations:

// Create an array containing the names of five fruits.\

const fiveFruit = ["apple", "watermelon", "banana", "orange", "watermelo"]
// Add a new fruit to the end of the array.
// console.log(fiveFruit.push("pine-apple"));
// console.log(fiveFruit);

// Remove the first fruit from the array.

// console.log(fiveFruit.shift()); // shift method to use to remove array from frist
// console.log(fiveFruit);

// Print the third fruit in the array
// console.log(fiveFruit[3]);


// Array Iteration;

// Create an array of numbers from 1 to 10.

let arr = [1,2,3,4,5,6,7,8,9,10]

// Use a loop to print each number in the array.

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    
}

// Create an array of strings representing days of the week.
let creArr = ["sun", "Mon","Tue","wed", "thus", "Fri", "sat"]
// Use array methods to rearrange the days so that Monday is the last day.

// let manday = creArr.indexOf("Mon");
// // console.log(manday);
// let check = creArr.splice(manday,1)
// console.log(check);
// console.log(creArr);
// console.log(creArr.push("Mon"));
// console.log(creArr);
// Array Filtering:

// Create an array of numbers.

const ArrNuber = [1,2,3,4,5,6,7,8,9,10,11,21,35,78,87,99]


// Use the filter method to create a new array containing only even numbers from the original array.

const result2 = ArrNuber.filter(myfunction)
function myfunction(num) {
    return num % 2 ==0;
}
// console.log(result2); 

// Array Mapping:

// Create an array of numbers.

let doubleNumber =[11,22,44,55,77,88,11,44,65,87,96,64,88]
// Use the map method to double each number in the array.
let deleteduble = doubleNumber.map(delerteNum)

function delerteNum(num, index, array) {
    // console.log(num);
    // console.log(index);
    // console.log(array);
    return array.indexOf(num) === index
}
// console.log(deleteduble);

// const doubleNUm = doubleNumber.map((num , index, array) => {
//     return array.indexOf(num) === index
// })
// // Array Reduction:

// Create an array of numbers.
// let num5 = [1,2,3,4,5,6,7,8,9,10]
// // Use the reduce method to find the sum of all numbers in the array.
// let sum = num5.reduce(addition)

// function addition(num,num2) {
//     return num + num2
// }
// console.log(sum);

// let secondSun = num5.reduce(function newCheck(acc,num) {
//     return acc + num;
// },0)

// console.log(secondSun);   // This are two method in js for function


// Nested Arrays:

// Create a two-dimensional array representing a tic-tac-toe board.
const twoArr = [
    ["x"],
    ["o"]
]  // that will be not done but we will try to undestand after complet all topic
// Write a function to check if any player has won the game.
// Array Sorting:

// Create an array of strings representing names.

const ArrS =["a","d",'c',"b","z","p"]
// Sort the array in alphabetical order.
ArrS.sort(); // This method to use sort the data from string accendinf order
console.log(ArrS);
// Array Searching:

// Create an array of objects, each containing a name and age property.
const arrObj = [
    {
        name:"kunal",
        age:21
    },
    {
        name:"Rohit",
        age:25
    },
    {
        name:"Shubham",
        age:23
    },
    {
        name:"Mangesh",
        age:31
    }
];

// Write a function to find an object in the array based on the name.  ---> high level quetions this solve after one month

console.log(arrObj.name);
console.log(arrObj);
// Array Slicing:

// Create an array of numbers from 1 to 10.
let arrSlice = [1,2,3,4,5,6,7,8,9,10]
// Use the slice method to create a new array containing only the numbers from 4 to 7.\
const arrresult = arr.slice(3,7)
console.log(arrresult);