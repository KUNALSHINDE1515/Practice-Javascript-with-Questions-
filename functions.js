// Write a function called add that takes two parameters (a and b) and returns their sum.

function add(a , b){
    return a + b;
}
console.log(add(5,7));
// Write a function called multiply that takes three parameters (a, b, and c) and returns their product.

function multiplicatio(a,b,c) {
    return a * b * c;
}

result = multiplicatio(4,8, 9);
console.log(result);
// Write a function called greet that takes one parameter (name) and returns a greeting message including the name.

function greet(name) {
    console.log(`Wish you many many happy retus of the day from ${name}`);
}

greet("Kunal")

// Write a function called calculateArea that takes two parameters (width and height) and returns the area of a rectangle.

function calculateArea(width , height) {
    return width * height;
}

console.log(`Area of cicle is `, calculateArea(5,5));

// Write a function called power that takes two parameters (base and exponent) and returns the result of raising the base to the power of the exponent.

function power(base , exponent) {
    
    return base ** exponent;
}

const result1 = power(5 , 7)
console.log(`Thi is result of raising the base ${result1}`);

// Write a function called capitalize that takes one parameter (str) and returns the capitalized version of the input string.

function capitalize(str){
    return
}

// console.log("hello duniya");
// Write a function called maxOfThree that takes three parameters (a, b, and c) and returns the largest of the three numbers.

function maxOfThree(a,b,c) {
    
    if (a<b) {
        console.log(`This is grether number:${b} `);
    }else if (b < c){
        console.log(`this is grather number: ${c}`);
    }else{
        console.log(`This is grather number: ${a}`);
    }
}maxOfThree(5,9,8)
// Write a function called isEven that takes one parameter (num) and returns true if the number is even, and false otherwise.

function isEven(num) {
    if (num % 2 == 0) {
        console.log(`Number is even ${num}`);
    }else{
        console.log(`Number is not even ${num}`);
    }
}

isEven(4)
// Write a function called reverseString that takes one parameter (str) and returns the reverse of the input string.

function reverseString(str) {
    
    let revese = ''

    for (let index = str.length - 1; index >= 0; index--) {
         revese += str[index];
        
    }

    return revese;
}
let check = reverseString("kunal");
console.log(check);

// function reverseString(inputString) {
//     let reversedString = '';
//     for (let i = inputString.length - 1; i >= 0; i--) {
//         reversedString += inputString[i];
//     }
//     return reversedString;
// }

// const originalString = "Hello, World!";
// const reversedResult = reverseString(originalString);
// console.log(`Reversed string: ${reversedResult}`);

// Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.
function average(aon) {
    
    if (aon.length === 0) {
        return 0;
    }

    const sum = aon.reduce((acc , num)=> acc + num , 0)
    return sum / aon.length;

}

const numArr = [22,44,55,66,77,88,54]
const avg = average(numArr)
console.log(avg);