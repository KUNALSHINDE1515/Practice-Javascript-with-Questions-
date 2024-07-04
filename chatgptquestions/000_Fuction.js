// Sure! Here are 20 coding practice questions focusing on functions in JavaScript:

// 1. **Addition Function:**
//    Define a function `add` that takes two numbers as arguments and returns their sum.

// 2. **Multiplication Function:**
//    Define a function `multiply` that takes two numbers as arguments and returns their product.

// 3. **Greeting Function:**
//    Define a function `greet` that takes a name as an argument and returns a greeting message (e.g., "Hello, [name]!").

// 4. **Reverse String Function:**
//    Define a function `reverseString` that takes a string as an argument and returns the reversed version of the string.

// 5. **Factorial Function:**
//    Define a function `factorial` that takes a number as an argument and returns its factorial.

// 6. **Check Prime Function:**
//    Define a function `isPrime` that takes a number as an argument and returns `true` if the number is prime, otherwise `false`.

// 7. **Concatenate Arrays Function:**
//    Define a function `concatArrays` that takes two arrays as arguments and returns a new array that concatenates both arrays.

// 8. **Filter Even Numbers Function:**
//    Define a function `filterEvenNumbers` that takes an array of numbers as an argument and returns a new array containing only the even numbers.

// 9. **Sum of Array Function:**
//    Define a function `sumArray` that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

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

let medianArry = [1,5,7,8,9,6,4,8,6,5,4,3,56,98,8]
let result = findMedian(medianArry)
console.log(result);


// 20. **Remove Duplicates Function:**
//    Define a function `removeDuplicates` that takes an array as an argument and returns a new array with all duplicate elements removed.

// function removeDuplicates(array) {
//     let checkResult = Array.from(new Set(array));
//     return checkResult;
// }

// let duplicateArr = [ "shubham","kunal", "shinde", "shinde", "shubham","kunal"]
// console.log(removeDuplicates(duplicateArr));

