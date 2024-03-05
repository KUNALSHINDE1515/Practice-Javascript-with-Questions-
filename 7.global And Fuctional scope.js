// Global Scope:
// a. What is meant by the global scope in JavaScript?

//  ---> jevha fuction chya baher varible declare kela jato tyala global scope mhantat

// b. How do you declare a global variable?
const globalScpoe = "Kunal Shinde Deshmukh"

// c. How can you access a global variable from within a function?

function global() {
    console.log(globalScpoe);
}
global()

// d. What are the potential drawbacks of using global variables?

/**Name Collisions: Global variables are accessible from any part of your code, so if you use common variable names, there's a risk of unintentionally overwriting or conflicting with variables from different parts of your codebase. This can lead to unexpected behavior and bugs that are difficult to track down.

Difficulty in Debugging: When you have a large codebase with many global variables, it can be challenging to trace where a variable is being modified or accessed. This can make debugging more time-consuming and error-prone.

Maintainability: Code that relies heavily on global variables can be harder to maintain and refactor. It becomes difficult to understand the dependencies between different parts of your code, which can make it harder to make changes or add new features.

Security Risks: Global variables are accessible from any part of your code, including third-party scripts or libraries that you might include in your application. This can potentially expose your application to security vulnerabilities if those third-party scripts inadvertently modify or access your global variables.

Performance Impact: Accessing global variables can be slower than accessing local variables because JavaScript needs to traverse the scope chain to find the variable. While the performance impact may be negligible for small applications, it can become significant in larger applications with many global variables.

Testing Difficulty: Global variables can make it harder to unit test your code because they introduce dependencies between different parts of your application. This can make it difficult to isolate and test individual components in isolation. */

// Local Scope:
// a. What is meant by the local scope in JavaScript?
// local scope mhanje jevha variable function madhe declare kele la asto

// b. How do you declare a local variable?\

function local() {
    let outside = "scpoe chek"
     vittal = "local scope"
    console.log(vittal);
}
// console.log(vittal); // thet wii erro varible is not difined
// local()

// c. What happens if you declare a variable inside a function without using the var, let, or const keyword?
/*If you declare a variable inside a function without using the var, let, or const keyword, JavaScript will implicitly create a global variable, regardless of whether the code is in strict mode or not. This behavior is called "implicit global variable declaration" or "leaking globals," and it can lead to unintended consequences and bugs in your code.*/

// d. Can you access a local variable outside of the function where it is declared?
// console.log(outside); // varible is not defined

// Global vs. Local Scope:
// a. What happens when you declare a variable with the same name in both the global and local scopes?
 var same = "Rohit shinde"
{
    var same = "dAdady"
    // console.log(same);
}
        console.log(same); // ovverride value

// b. How does JavaScript determine which variable to use when there are variables with the same name in different scopes?
var x = "global";

function outer() {
    var x = "outer";

    function inner() {
        var x = "inner";
        console.log(x); // Output: "inner"
    }

    inner();
    console.log(x); // Output: "outer"
}

// outer();
// console.log(x); // Output: "global"

// c. Can a local variable have the same name as a global variable?

// Practice Problems:
// a. Write a function that declares a global variable and accesses it from within the function.
// b. Write a function that declares a local variable and accesses it from outside the function.
// c. Write a function that demonstrates variable shadowing.
// d. Explain the difference between var, let, and const in terms of scope.

// Nested Scope:
// a. What happens when you have nested functions in JavaScript?
// b. Can inner functions access variables declared in outer functions?
// c. Write a nested function that accesses variables from both its local scope and the outer function's scope.

// Block Scope:
// a. What is block scope?
// b. Which JavaScript keywords introduce block scope?
// c. How does block scope differ from function scope?

// Scope Chain:
// a. What is the scope chain in JavaScript?
// b. How does JavaScript resolve variable references using the scope chain?