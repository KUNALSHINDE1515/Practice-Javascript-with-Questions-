
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

let result = diff.indexOf("s") // indexOf() ekadya sting chi postion kiti ahe (ex. array of index) tyasathi use kele jate
// console.log(result);

// let lastResult = diff.lastIndexOf("e")
// console.log(lastResult);  

/*indexOf() returns the index for the first occurrence of the substring.
 lastIndexOf() returns the index for the last occurrence of the substring. */

// How do you concatenate strings in JavaScript?
let CC = "kunal"
let bd = "shinde"

// console.log(CC+ bd);
// console.log(CC.concat(bd)); // this are two methods to cancat string

// How do you access individual characters in a string?  -->In JavaScript, you can access individual characters in a string using bracket notation ([]) or the charAt() method. Here's how you can do it:

let str = "hellooo pune"
// console.log(str.charAt(1));
// console.log(str[8]);


//=================================================== Booleans====================================================================================

// What are boolean values in JavaScript? -->true and false

// Explain truthy and falsy values in JavaScript. -->     lean one more time the learning of this topic is not good

// How do you negate a boolean value in JavaScript?  !--> this operator is negalate value in js

const bharat = false
let negalate = !bharat
// console.log(negalate); // the output will bw true


// How do you convert other data types to boolean? --> Bollean() this function will be used

let jaiShriRAm = Boolean(0);
// console.log(jaiShriRAm);


// Arrays:

// How do you create an array in JavaScript?
const myArray = [1,2,4,"kunal", "shinde", 4567889,"ram-ram"]; // this is array we created in js


// Explain the difference between push() and pop() methods.

//  console.log(myArray.push("nath saheb"));  // the push method we use puns the element in array
//  console.log(myArray.pop()); // this method remove last element from array


// How do you access elements in an array?

// console.log(myArray[3]) // we acces the element in array with [] notations there are the example


// How do you check if a variable is an array?

// console.log(Array.isArray(myArray));  // if we can check the variable is array --> Array.isArray()  --> we are use 


// Objects:

// What is an object in JavaScript?
// ---> In simple words object is key-value pairs in javascript each value has unique key and datatypes

// How do you access properties of an object?
const myObject = {
    name: "Ranjet",
    month: "march",
    reserve : true
}

// console.log(myObject.name); //  that way to acces propeties in javascript

// How do you add or modify properties of an object?
// myObject.city = "pune"; // This is waty to modify propeties of an object
// myObject.name = "Deshmukh";
// console.log(myObject);  


// How do you loop through the properties of an object? // ---> this problem solve after complete js practice

// Undefined and Null:

// Explain the difference between undefined and null.
// When do you get undefined in JavaScript?
let checkUndef;
console.log(checkUndef);    // when we declare the variable but value does not assign the output will be undefined

// How do you explicitly set a variable to null?
let variable = null ;
console.log(variable);
// Type Conversion:

// How do you convert a string to a number in JavaScript?

const concver = "12345";
console.log(Number(concver));
// How do you convert a number to a string in JavaScript?

const Ss = 1212454;
const tyoe = String(Ss) // this is use dto type of 
// console.log(typeof(tyoe));

// Explain implicit and explicit type conversion.

let num1 = 1234;
let implicit = "This is a number " +num1 ; // this are the implicit conversion in javasript
console.log(implicit);