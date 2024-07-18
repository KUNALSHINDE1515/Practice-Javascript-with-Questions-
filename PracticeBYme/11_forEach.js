// Basic Usage
// Iterate over an array of numbers and print each number.2
const myArray = [11, 22, 88, 99, 55 , 84, 65]

myArray.forEach(function (item) {
    console.log(item);
} )

// Iterate over an array of strings and convert each string to uppercase.

let name = "shinde"
console.log(name.toUpperCase());

const result = ['kunal', "shinde"]

result.forEach( (text) => {
    console.log(text.toUpperCase());
})

// Iterate over an array of objects and print the value of a specific property for each object.
const mixArrObj = [
    {
        name: "kunal",
        age:21
    },
    {
        name: "shubham",
        age:23
    },
    {
        name: "Rohit",
        age:25
    },
    {
        name: "Omkar",
        age:22
    },
]


 mixArrObj.forEach( (value) => {
    console.log(`Name is : ${value.name} & age is : ${value.age}`);

})


// More Complex Scenarios
// Calculate the sum of all numbers in an array using forEach.

const sumArray = [11, 21, 31, 41, 51, 61, 72, 82, 98, 10]
let addition = 0
sumArray.forEach( (value ) => {
   addition = addition + value
})
console.log(addition);


// Find the maximum and minimum values in an array using forEach.

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
sumArray.forEach( (value) => {
    if(value > max){
       max = value
    }
    if(value < min)
    min = value
});
console.log("max :", max);
console.log("min :", min);

// Create a new array containing the doubled values of each element in an array using forEach.\

let dobleVAlueArr = [1, 2, 3, 4, 8, 5, 6, 7, 6]
let update  = []

dobleVAlueArr.forEach( (num) =>  update.push(num * 2))
console.log(update);


