// Print Numbers: Write a JavaScript program to print numbers from 1 to 10 using a for loop.

for (let index = 0; index < 10; index++) {
    const element =  index;
    // console.log(element);
    
}
// Even Numbers: Write a JavaScript program to print even numbers between 1 to 20 using a for loop.

for (let i = 1; i <=20 ; i++) {
     if (i % 2 === 0) {
        // console.log(i);
    }
    
}
// Factorial: Write a JavaScript program to calculate the factorial of a number using a for loop.

function factorial(number) {
    let factorial = 1
    
    for (let i = 2; i <=number; i++) {
        
        factorial *=  i
        
    }
    return factorial;
}

const fresult = factorial(5)
// console.log(fresult);

// Reverse String: Write a JavaScript program to reverse a given string using a for loop.

function reverse(str) {
    let newstr = "";

    for (let i = str.length - 1; i >=0; i--) {
        newstr += str[i]
        
    }

    return newstr;
}

const restuloeignal = reverse("lanuk")
// console.log(restuloeignal);

// Sum of Array: Write a JavaScript program to find the sum of elements in an array using a for loop.

let arrsum = [2,4,6,8,10,12,45,69]
for (let i = arrsum.length ; i <; i++){
    const element = array[i];
   
}
// Prime Numbers: Write a JavaScript program to print prime numbers between 1 to 50 using a for loop.

// Table of a Number: Write a JavaScript program to print the multiplication table of a given number using a for loop.

// Fibonacci Series: Write a JavaScript program to generate the Fibonacci series up to a specified number of terms using a for loop.

// Power Calculation: Write a JavaScript program to calculate the power of a number using a for loop.

// Count Characters: Write a JavaScript program to count the number of occurrences of a specific character in a given string using a for loop.