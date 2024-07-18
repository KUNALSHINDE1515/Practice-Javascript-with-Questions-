// Basic Usage
// How do you iterate over an array using the for...of loop?

const myArr = [1, 2, "shinde", "Kunal", 8, 7, 4]
for (const keys of myArr) {
    // console.log(keys);
}
// Can you iterate over a string using for...of? If yes, what does it iterate over?  ==> yes we are use for of in string

let checkString = "KUanl"
for (const item of checkString) {
    // console.log(item);
}

// What is the syntax of a for...of loop?

// for (const iterator of object) {
//     // statmennt
// }


// Array Manipulation

// How would you calculate the sum of all elements in an array using for...of?
let sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for (const nums of sumArray) {
    sum = sum + nums
    // console.log(sum); 

}
// How can you create a new array containing the doubled values of each element in an array using for...of?
// Explain how to find the maximum value in an array using for...of.


for (const max of sumArray) {
    let maximim = max[0]
    maximim = max > sumArray
    console.log(maximim);
}
// Other Iterables
// Can you use for...of with Maps? If yes, how?

const check = new Map()
check.set("kunal", "shuinde")
check.set("Shubham", "shuinde")
console.log(check);

for (const [key, value] of check) {
    console.log([key ," ", value ]);  //map la jar for of loop lavayache asel tarr [] notationn use karayche 
}


// What about Sets? Can you use for...of with them?
// How can you iterate over the keys of a Map using for...of?
// Complex Scenarios
// How would you flatten a nested array using for...of and recursion?
// What is a custom iterator? Can you create one for an object using for...of?
// How can you use for...of to filter elements from an array based on a condition?
// Additional Challenges
// How can you improve the performance of a for...of loop when dealing with large arrays?
// What are the potential pitfalls of using for...of?
// When would you choose a for...of loop over a for loop?
// Would you like to start with some basic questions or jump to a specific area?