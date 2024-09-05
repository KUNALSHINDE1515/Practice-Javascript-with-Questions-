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

// console.log(max);


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
// console.log(found);

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
        // console.log(nums);
        
    }
})

// Create a new array containing only strings from an existing array.
const arrNew = [1, 2, 3, 4, "shinde", "deshmukh"]
arrNew.forEach( function (each) {

    if (typeof each == "string") {
        // console.log(each);   
    }
    // console.log(each.toString());
    

})

// Create a new array containing the squares of all elements in an existing array.
const squareArr = [2, 4, 6, 8, 10]
let squareNewArr = []
squareArr.forEach( function (nums) {
    squareNewArr.push(nums * 2) 
})
// console.log(`The suare of all emenets ${squareNewArr}`);

// map

// Create a new array containing the uppercase versions of all strings in an existing array.

const lowArr = ["banana", "apple", "mango", "orange", "chiko"]
lowArr.map( (item) => {
    // console.log(item.toLocaleUpperCase());
}) 
// Create a new array containing the lengths of all strings in an existing array.
lowArr.map( (item) => {
    item.length
})
// Create a new array containing the square roots of all numbers in an existing array.
let myArr1 = [1, 2, 3, 4, 5, 6,]
const rootArr = []
myArr.map( (val) => {
    // console.log(val * 2);
    rootArr.push(val * 2)
    
})
// console.log(rootArr);

// Convert an array of objects to an array of strings, extracting a specific property.
const objects = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35
     }
  ];

  const see =objects.map( obj => obj.name)
//   console.log(see);
  
// Apply a discount to all prices in an array of products.
const ProdectArray = [
    {
        course: "JavaScript",
        price : 2999
    },
    {
        course: "Cpp",
        price : 999
    },
    {
        course: "Python",
        price : 1999
    },
    {
        course: "Java",
        price : 4999
    },
    
]

const resss = ProdectArray.map((val) => (`Your Course is ${val.course} & Your Discounted Price is ${val.price - val.price / 100 * 10}`))
console.log( typeof resss);
const str =  String(resss)
// console.log( typeof str);




// Convert a Fahrenheit temperature array to Celsius.

// const FahrenheitArr = [75, 80, 85, 90]
// FahrenheitArr.map( val =>  
//     console.log((val - 32) * 5 /9)
// )
// Create a new array containing the first letter of each word in a sentence.
const sentence = "Hi I am kunal Shinde . I am fullstack developer";
// console.log(sentence.split(" "));

const task = sentence.split(" ").map( val => val[0])
// console.log(task);

// Create a new array containing the last names of people in an array of objects.

const arrObj = [
    {
        name:"Shubham",
        city: "Pune",
    },
    {
        name:"Amol",
        city: "Pune",
    },
    {
        name:"xyz",
        city: "Saswad",
    },
    {
        name:"amit",
        city: "Pune",
    },
]

let city = arrObj.map( (val) => {

    return `Name is ${val.name} city ${val.city}`
})
// console.log(city);

// const Convert = String(city)
// console.log(Convert);


// Create a new array containing the even-indexed elements of an existing array.

let evenIndex = [1, 2, 3, 4, 5, 6,]
 const evenIndexe = evenIndex.filter( (val , index) => {
     return index % 2 === 0
    
})
// console.log(evenIndexe);

// Create a new array containing the odd-indexed elements of an existing array.
const oddIndexe = evenIndex.filter( (val , index) => {
    return index % 2 !== 0
   
})
// console.log(oddIndexe);



// reduce


// Calculate the product of all elements in an array.

const ProductArr = [10, 20, 30, 40, 50] 
// console.log(ProductArr.length);

const pResulu  = ProductArr.reduce( (acc, curr) => {
    // console.log(`Acc : ${acc} currval : ${curr}`);
    
   return acc + curr
    
})
// console.log(pResulu);

// Calculate the average value of all elements in an array.
const average = ProductArr.reduce( (acc , curr) => {
     return  acc + curr 
     
}, 0)
const result = average / ProductArr.length
// console.log(result);


// Find the most frequent element in an array.

const findFeqEl = [10, 20, 30, 40, 50]
// Flatten a nested array.
// Group elements in an array by a property.
// Calculate the total price of a shopping cart.
const shoppingCart = [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 15 }
  ];

  const UserPay = shoppingCart.reduce((total, price) =>  (total + price.price), 0)
//   console.log(UserPay);
  
// Count the occurrences of each element in an array.
// Find the longest word in a sentence.
const word = sentence.split(" ")
let logeWord = " "
for (let val of word) {
if (val.length > logeWord.length) {
    logeWord = val
}
    
}
// console.log(logeWord);

    




// Calculate the factorial of a number using reduce.
const factArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// factArr.reduce()
// Implement a custom sum function using reduce.



// filter
// Create a new array containing only numbers greater than a given threshold.
let result1 = factArr.filter( num => num > 5)
console.log(result1);


// Create a new array containing only strings that start with a specific letter.

const strArr =["amit", "Saswad", "Amol", "Pune", "Shubham", "Shinde","amit", "Saswad", "Amol", "Pune", "Shubham", "Shinde"]
strArr.filter( (str) => {
    if (str[0] ==="S") {
        console.log(str);
        
    }
})



// Create a new array containing only objects with a specific property value.
const objects1 = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
  ];
  
  const ageToFilter = 30;

  const ageResult = objects1.filter(obj => obj.age === ageToFilter)
  console.log(ageResult);
  
// Remove duplicate elements from an array.
const dulicate = strArr.filter( (item , index) => strArr.indexOf(item)  === index)
console.log(dulicate);

// Find all prime numbers within a given range.
filter(num)
// Filter out elements that are not truthy.
// Find all elements that are divisible by a given number.
// Filter out elements that are not unique.
// Filter out elements that are not palindromes.
// Filter out elements that are not valid email addresses.