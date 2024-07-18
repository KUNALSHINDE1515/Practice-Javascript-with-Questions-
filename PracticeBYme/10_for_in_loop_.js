// Print all properties of an object: Create an object with various properties and use a for...in loop to iterate through them, printing each property and its value.

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const key in person) {
//    console.log(key, " :- " , person[key]);
}
// Check if a property exists: Write a function that takes an object and a property name as arguments. Use a for...in loop to check if the property exists in the object. Return true if it does, false otherwise.

function hasProperty(name, prop) {
   for (const key in name) {
    if (key == prop) {
        return true
    }
    return false
   }
}

const user = { id: 123, username: "john" };
// console.log(hasProperty(user, "id"));
// console.log(hasProperty(user, "c"));


// Filter object properties: Create an object and write a function that takes the object and a filtering condition (e.g., only strings, only numbers with certain values) as arguments.  Use a for...in loop to iterate and create a new object containing only the matching properties.
// const data = {
//     name: "Bob",
//     age: 45,
//     score: 88,
//     active: true
// };

// function filterObject(obj, condition) {
//     const filtered = {};
//     for (const prop in obj) {
//         if (condition(obj[prop])) {
//             filtered[prop] = obj[prop];
//         }
//     }
//     return filtered;
// }

// const numbers = filterObject(data, value => typeof value === "number");
// console.log(numbers); // { age: 45, score: 88 }


function filterObject(input, condition){

    const emptyObject = {}

    for (const key in input) {
        if (condition(input[key])) {
            emptyObject[key] = input[key]
        }
    }

    return emptyObject

}

const result = filterObject(person, (item) => 
     typeof item === "number"
)
console.log(result); 
// Modify object properties: Write a function that takes an object and a modification function as arguments. Use a for...in loop to iterate through the object's properties, applying the modification function to each value.

const products = {
    shirt: 20,
    pants: 35,
    shoes: 50
};

// function modifyValues(obj, modifier) {
//     for (const key in obj) {
//         obj[key] = modifier(obj[key]);
//     }
//     return obj;
// }

// function addDiscount(price) {
//     return price * 0.9; // 10% discount
// }

// const discountedPrices = modifyValues(products, addDiscount);
// console.log(discountedPrices);


function modifiesVAlues(obj, modi) {
    for (const key in obj) {
        obj[key] = modi(obj[key])
    }
    return obj
}

function discount(price) {
    return price * 0.9
}

const disP = modifiesVAlues(products,discount)
console.log(disP); 