// Write a program to find out the perimeter of a rectangle. Print the results to the console.  

let num1 = 20;
let num2 = 30

let results = 2 * (num1 + num2)

console.log(`Perimeter of rectangle is ${results}`);



// truty and false operator in js
// What are Conditions, If, If-else, if-else-if1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the 
// traffic light is red print the vehicles must stop. 

let singnal = "red"

if (singnal === "red") {
    console.log(`You can't goooooo!!!!`);
} else if(singnal === "green") {
    console.log(`you can go`);
}else if(singnal === "yellow"){
    console.log(`Ypu can go slowely`);
}else {
    console.log(`Invalid trafic light`);
}

// 2. Write a program to print the largest of 2 numbers.  

let number1 = 200;
let number2 = 70;

if (number1 > number2) {
    console.log(`${number1} is largest number`);
}else{
    console.log(`${number2} is largest number`);
}
 

// Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible 
// by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to 
// the numbers divisible by 3 or 5.  


