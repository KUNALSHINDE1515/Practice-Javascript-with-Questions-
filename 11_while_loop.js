// Write a JavaScript program to print numbers from 1 to 10 using a while loop.

let no = 0

while (no <10) {
    no ++;
    // console.log(no);
}
// Write a JavaScript program to calculate the factorial of a number using a while loop.

// let number = 5



function calculateFactotial(num) {
    if (num < 0) {
        return "factorialis not defined"
    }
    let factorial = 1
    let i = 1;
    while (i <= num) {
        factorial *=i
        i++;
        
    }
    return factorial;
}

const result = calculateFactotial(5);
console.log(result );
// Write a JavaScript program to find the sum of digits of a number using a while loop.
// Write a JavaScript program to reverse a number using a while loop.
// Write a JavaScript program to print the Fibonacci series using a while loop.
// Write a JavaScript program to check whether a number is prime or not using a while loop.
// Write a JavaScript program to find the GCD (Greatest Common Divisor) of two numbers using a while loop.
// Write a JavaScript program to find the LCM (Least Common Multiple) of two numbers using a while loop.
// Write a JavaScript program to generate the multiplication table of a number using a while loop.
// Write a JavaScript program to find the sum of all even numbers between 1 to 100 using a while loop.