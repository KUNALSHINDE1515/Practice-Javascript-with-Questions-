// Sure! Here are 20 coding practice questions focusing on functions in JavaScript:

// 1. **Addition Function:**
//    Define a function `add` that takes two numbers as arguments and returns their sum.

function addTwoNumber(num1, num2){
    return num1 + num2;
}
// console.log(addTwoNumber(88,55));
// 2. **Multiplication Function:**
//    Define a function `multiply` that takes two numbers as arguments and returns their product.
function addTwoNumber1(num1, num2){
    return num1 *  num2;
}
// console.log(addTwoNumber1(88,55));

// 3. **Greeting Function:**
//    Define a function `greet` that takes a name as an argument and returns a greeting message (e.g., "Hello, [name]!").

function greet(name){
    return ` Hello ${name} Welcome to our service`;
}

// console.log(greet("kunal"));

// 4. **Reverse String Function:**
//    Define a function `reverseString` that takes a string as an argument and returns the reversed version of the string.

function reverseString(str){
    let check = "";
    for (let i = str.length -1; i>=0; i--){
        console.log(i);
        check +=str[i]
    }
    console.log(check);
}
reverseString("kunal")

// 5. **Factorial Function:**
//    Define a function `factorial` that takes a number as an argument and returns its factorial.

function factorial(number){
    let ans = 1
    if(number === 0){
        return 1;
    }
   for(let i = 2; i <= number; i++){
    ans*=i
   }
   console.log(ans);
}

factorial(5)

// 6. **Check Prime Function:**
//    Define a function `isPrime` that takes a number as an argument and returns `true` if the number is prime, otherwise `false`.

function checkPrime(number){
    
    if(number <= 0) return false
    if(number <= 3) return true

    if(number % 2 === 0 || number % 3 === 0) return false
    for (let i = 5; i * i <= number; i+=6) {    
        if (number % i ===0  || number % (i + 2) ===0) return false

    }
    return true;
}
console.log(checkPrime(1));
console.log(checkPrime(10));


// 7. **Concatenate Arrays Function:**
//    Define a function `concatArrays` that takes two arrays as arguments and returns a new array that concatenates both arrays.

function concatArrays( arr1, arr2){

    let result = [...arr1, ...arr2]
    return result

}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8 ,9 ,10]
const result = concatArrays(arr1,arr2);
console.log(result);


// 8. **Filter Even Numbers Function:**
//    Define a function `filterEvenNumbers` that takes an array of numbers as an argument and returns a new array containing only the even numbers.
function filterEvenNumbers(parameter){
    const newArr = []
    for (let i = 0; i < parameter.length; i++) {
      const currentNUmber = parameter[i]

      if (currentNUmber % 2 === 0) {
         newArr.push(currentNUmber)
      }
    }
    return newArr
}
let parameter = [2,4,6,5,8,7,1,3,9,10]
const pass = filterEvenNumbers(parameter)
console.log(pass);
// 9. **Sum of Array Function:**
//    Define a function `sumArray` that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function sumArray(numbers){

    for (let i = 0; i < numbers.length; i++) {
        
    }
}

let SumArr = [1, 2, 5, 8, 7, 9, 200]
let sum = sumArray(SumArr)
console.log(sum);

// 10. **Count Occurrences Function:**
//     Define a function `countOccurrences` that takes an array and a value as arguments and returns the number of times the value appears in the array.

// 11. **Find Max Function:**
//     Define a function `findMax` that takes an array of numbers as an argument and returns the largest number in the array.

// 12. **Palindrome Check Function:**
//     Define a function `isPalindrome` that takes a string as an argument and returns `true` if the string is a palindrome (ignoring spaces and case), otherwise `false`.

// 13. **Convert Celsius to Fahrenheit Function:**
//     Define a function `celsiusToFahrenheit` that takes a temperature in Celsius as an argument and returns the equivalent temperature in Fahrenheit.

// 14. **Find Longest Word Function:**
//     Define a function `findLongestWord` that takes a string as an argument and returns the longest word in the string.

// 15. **Reverse Array Function:**
//     Define a function `reverseArray` that takes an array as an argument and returns a new array with the elements reversed.

// 16. **Capitalize Words Function:**
//     Define a function `capitalizeWords` that takes a string as an argument and returns the same string with the first letter of each word capitalized.

// 17. **Check Anagram Function:**
//     Define a function `areAnagrams` that takes two strings as arguments and returns `true` if they are anagrams (contain the same characters in any order), otherwise `false`.

// 18. **Generate Fibonacci Sequence Function:**
//     Define a function `fibonacci` that takes a number `n` as an argument and returns an array of the first `n` Fibonacci numbers.

// 19. **Find Median Function:**
//     Define a function `findMedian` that takes an array of numbers as an argument and returns the median value.
function findMedian(array){
    let median = array[0]

    for (let i = 0; i < array.length; i++) {
        console.log(i);
    }
}

// let medianArry = [1,5,7,8,9,6,4,8,6,5,4,3,56,98,8]
// let result = findMedian(medianArry)
// console.log(result);


// 20. **Remove Duplicates Function:**
//    Define a function `removeDuplicates` that takes an array as an argument and returns a new array with all duplicate elements removed.

// function removeDuplicates(array) {
//     let checkResult = Array.from(new Set(array));
//     return checkResult;
// }

// let duplicateArr = [ "shubham","kunal", "shinde", "shinde", "shubham","kunal"]
// console.log(removeDuplicates(duplicateArr));

