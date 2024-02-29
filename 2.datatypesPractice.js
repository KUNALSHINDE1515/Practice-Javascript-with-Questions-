
// Primitive Data Types:

// What are the primitive data types in JavaScript?
//  --->  String , Number , boolean ,  null , Undefined, symbol 


// Explain the difference between undefined and null.
//  -->  undefined ---- mhanje varible declare kelela asto but value instialized keleli naste.
// --> null menas --> varible declare kela ahe pan value tyachi null ahe

// How do you check the type of a variable in JavaScript?
const check = "kunal";
// console.log(typeof check); //check type of tyoe of method

// What is NaN and how can you check if a value is NaN? 
// Nan ------> Nan means not a number the following are to check value -->

let name = "shinde"
let num = 12345

// console.log(isNaN(name));
// console.log(isNaN(num));

// What are the differences between == and === operators? ----->

/*.----->  == performs type conversion if needed and returns true if the operands have the same value after conversion, otherwise, it returns false. === does not perform type conversion and returns true only if both operands are of the same data type and have the same value, otherwise, it returns false. */

// Numbers:

// How do you convert a string to a number in JavaScript?
let sNuber = "12345698"
// console.log(Number(sNuber)); 
// console.log(parseInt(sNuber)); 
// console.log(parseFloat(sNuber)); 
// console.log(+sNuber); 

// ---- this are the following methods in js to convet string in number



// Explain the difference between parseInt() and parseFloat().

let defferance = 124.54
// console.log(parseInt(defferance));    // IN THIS METHOD OUTPUT WILL BE 124 IT MEAN IT ONLT PRINT  WHOLE NUMBER
// console.log(parseFloat(defferance));  // IN THIS METHOD OUTPUT WILL BE 124.54 IT PRINT ALSO DECIMAL POINT

// How do you round a number to a certain number of decimal places?

let convert = 1248.555456655
// console.log(convert.toFixed(2));    // toFixed method decimal places kiti pahejet yasathi use kela jate


// What is the maximum and minimum value in JavaScript?
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// Strings:

// How do you find the length of a string in JavaScript?

let kjh = "shindeKUnal"
// console.log(kjh.length); // lenght propety

// Explain the difference between string methods indexOf() and lastIndexOf().

let diff = "kunal shinde"
// console.log(indexOf(diff));

let result = diff.indexOf("shinde") // indexOf() ekadya sting chi postion kiti ahe (ex. array of index) tyasathi use kele jate
console.log(result);

let lastResult = diff.lastIndexOf("kunal")
console.log(lastResult);

// How do you concatenate strings in JavaScript?
// How do you access individual characters in a string?
// Booleans:

// What are boolean values in JavaScript?
// Explain truthy and falsy values in JavaScript.
// How do you negate a boolean value in JavaScript?
// How do you convert other data types to boolean?
// Arrays:

// How do you create an array in JavaScript?
// Explain the difference between push() and pop() methods.
// How do you access elements in an array?
// How do you check if a variable is an array?
// Objects:

// What is an object in JavaScript?
// How do you access properties of an object?
// How do you add or modify properties of an object?
// How do you loop through the properties of an object?
// Undefined and Null:

// Explain the difference between undefined and null.
// When do you get undefined in JavaScript?
// How do you explicitly set a variable to null?
// Type Conversion:

// How do you convert a string to a number in JavaScript?
// How do you convert a number to a string in JavaScript?
// Explain implicit and explicit type conversion.