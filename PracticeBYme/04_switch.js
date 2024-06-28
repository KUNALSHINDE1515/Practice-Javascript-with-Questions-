// Basic Comparisons:

// Vowel or Consonant: Write a program that asks the user for a character and determines if it's a vowel (a, e, i, o, u) or a consonant using a switch statement.

// Month Selection: Write a program that asks the user for a month number (1-12) and prints the corresponding month name (January, February, etc.) using a switch statement.

let month = 8

switch (month) {
    case 1:
        console.log(`January`);
        break;
    case 2:
        console.log(`Febreuary`);
        break;
    case 3:
        console.log(`MArch`);
        break;
    case 4:
        console.log(`April`);
        break;
    case 5:
        console.log(`May`);
        break;
    case 6:
        console.log(`June`);
        break;
    case 7:
        console.log(`July`);
        break;
    case 8:
        console.log(`August`);
        break;
    case 9:
        console.log(`September`);
        break;
    case 10:
        console.log(`Octomber`);
        break;
    case 11:
        console.log(`November`);
        break;
    case 12:
        console.log(`December`);
        break;
    default:
        console.log(`Total month of year is noly 12`);
        break;
}
// Traffic Light: Write a program that asks the user for a traffic light color ("red", "yellow", "green") and prints the corresponding message (e.g., "Stop" for red) using a switch statement.

let light = "rd"

switch (light) {
    case "red":
        console.log(`${light} please stop the signal`);
        break;
    case "yellow":
        console.log(`${light} go slow `);
    case "green":
        console.log(`${light} go go go easily `);
    default:
        console.log(`Techinical error `);
        break;
}
// Calculations and Operations:

// Area Calculator: Write a program that asks the user for the shape (circle, rectangle, square) and its dimensions (radius for circle, length and width for rectangle/square) and calculates the area using a switch statement.
// Simple Math: Write a program that asks the user for two numbers and an operator (+, -, *, /) and performs the corresponding calculation using a switch statement.
// Remember:

// Use break statements after each case in the switch statement to prevent code from falling through to the next case unintentionally.
// Include a default case to handle unexpected input values.