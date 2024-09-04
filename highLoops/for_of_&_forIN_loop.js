// JavaScript:

// For...of Loop Questions
// Iterate over an array of numbers: Write a for...of loop to print each number in the array [1, 2, 3, 4, 5].

const myArray = [1, 2, 3, 4, 5]
for (const value of myArray) {
    // console.log(value);
    
}

// Sum of array elements: Use a for...of loop to find the sum of all numbers in the array [10, 20, 30, 40, 50].

const sumArray = [10, 20, 30, 40, 50]
let total = 0
for (const sum of sumArray) { 
    total = total + sum
}
// console.log(total);

// Print characters of a string: Write a for...of loop to print each character in the string "JavaScript".

let str = "JavaScript"
for (const each of str) {
    // console.log(`Each sting value :--> ${each}`);
    
}

// Filter even numbers: Use a for...of loop to filter and print only the even numbers from the array [1, 2, 3, 4, 5, 6].

const myNumber = [1, 2, 3, 4, 5, 6] 
for (const num of myNumber) {
    
    if (num % 2  !== 0) {
        // console.log(`even number is following adday is :---> ${num}`);
        
    }
}

// Multiply each element by 2: Write a for...of loop to multiply each number in the array [2, 4, 6, 8] by 2 and print the result.

const mulTiplicationArray = [2, 4, 6, 8]

for (const num of mulTiplicationArray) {
    // console.log(`${num} * 2  = ${num * 2}`); 
}

// Count vowels in a string: Use a for...of loop to count the number of vowels in the string "Hello World".

const msg = "Hello World"
let result = 0
const vowels = ["a", "e", "i", "o", "u"];
for (const count of msg.toLowerCase()) {
    // result = count.length + result

    if(vowels.includes(count)){
        result++
    }
    // const rse = vowel.indexOf(count)
    // console.log(rse);
    
    
}
// console.log(result);

// Reverse an array: Write a for...of loop to reverse the array [10, 20, 30, 40, 50] and print the result

const mySArray = [10, 20, 30, 40, 50]
// mySArray.reverse()
let i = 0
const reverseArray = []
for (const value of mySArray) {
//    console.log(value);
    // let check = reverseArray.push(value)
    reverseArray.unshift(value)
    
    
}
// console.log(reverseArray);

// Find the maximum number: Use a for...of loop to find the maximum number in the array [5, 3, 9, 1, 7].

const findMax = [5, 3, 9, 1, 7]
let maxNum = 0
for (const num of findMax) {
    if(num > maxNum){
        maxNum = num
    }
}
// console.log(maxNum);


// Print array of objects: Write a for...of loop to print each object in the array [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}].

const myObj = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}]

for (const value of myObj) {
    // console.log(value.name);
    
}

// Check if an element exists: Use a for...of loop to check if the number 5 exists in the array [1, 2, 3, 4, 6] and print a message accordingly.


const elementExist = [1, 2, 3, 4, 6]

for (const element of elementExist) {
    
    if (element == 3) {
        console.log(`Something is adding your task`);
        continue
        
    }
    // console.log(element);
    
}



// For...in Loop Questions
// Iterate over an object's properties: Write a for...in loop to print all the properties and values of the object {name: 'Alice', age: 25, city: 'New York'}.

const obj = {
    name: 'Alice',
    age: 25, 
    city: 'New York'
}

for (const key in obj) {
//    console.log(`The key is ${key} the value is ${obj[key]}`);
   
}

// Count properties of an object: Use a for...in loop to count the number of properties in the object {a: 1, b: 2, c: 3}.

const countObj =  {a: 1, b: 2, c: 3}
let pc = 0
for (const key in countObj) {
    // console.log(includes(key));
    pc++

    
}
// console.log(pc);


// Sum of object's values: Write a for...in loop to calculate the sum of all values in the object 

const sumOBJ = {x: 10, y: 20, z: 30}
let sum = 0
for (const key in sumOBJ) {
//    console.log(sumOBJ[key]);

   sum = sumOBJ[key] + sum

   
}
// console.log(sum);

// Check if a property exists: Use a for...in loop to check if the property age exists in the object {name: 'Bob', age: 30, job: 'Engineer'}.
const anotherObj = {name: 'Bob', age: 30, job: 'Engineer'}
let checkV = false
for (const key in anotherObj) {
  if (key === 'age') {
    checkV = true
    break
  }
}

if (checkV) {
    // console.log('Property age exist in the value');
    
}else{
    // console.log('Property age not exist inn the value');
}

// Print keys of an object: Write a for...in loop to print all the keys of the object {firstName: 'John', lastName: 'Doe', age: 30}.

const objAnther = {firstName: 'John', lastName: 'Doe', age: 30}

for (const key in objAnther) {
    // console.log(key);
    
}

// Nested objects: Use a for...in loop to print the properties of the nested object {name: 'Alice', details: {age: 25, city: 'New York'}}.

const nesterObj =  {name: 'Alice', details: {age: 25, city: 'New York'}}

for (const key in nesterObj) {
  console.log(nesterObj[key]);
  
}


const person = {
    name: 'Alice',
    details: {
      age: 25,
      city: 'New York'
    }
  };
  
  for (let property in person) {
    if (typeof person[property] === 'object') {
      console.log("Nested object:", property);
      for (let nestedProperty in person[property]) {
        console.log("  ", nestedProperty, person[property][nestedProperty]);
      }
    } else {
      console.log(property, person[property]);
    }
  }

// Convert object values to uppercase: Write a for...in loop to convert all the string values of the object {a: 'apple', b: 'banana', c: 'cherry'} to uppercase.

const uppTAsk = {a: 'apple', b: 'banana', c: 'Bherry'}

for (const key in uppTAsk) {
    // let upp = uppTAsk[key]
    // toUppaerCase(upp)
    // console.log(key);
    console.log(uppTAsk[key].toUpperCase());

}



// Print index and value of an array: Use a for...in loop to print the index and corresponding value of the array ['a', 'b', 'c', 'd'].

const arrCheck = ['a', 'b', 'c', 'd']

for (const key in arrCheck) {
   console.log(`the index ix ${key} the value of arr is ${arrCheck[key]}`);
   
}


// Count the length of each property: Write a for...in loop to count and print the length of each value in the object {name: 'Alice', city: 'Paris'}.

const objCheckLenght = {name: 'Alice', city: 'Pariss'}

for (const key in objCheckLenght) {
    console.log(objCheckLenght[key].length);
    console.log(objCheckLenght[key]);
    
}

// Check if an object is empty: Use a for...in loop to check if the object {} is empty and print a message accordingly.

const emptyObj = {
    
}

let isEmty = true

for (const key in emptyObj) {
    isEmty = false;
    break;
}

if (isEmty) {
    console.log(`Your object is empty`);
}else{
    console.log(`data are shown in your object`);
}