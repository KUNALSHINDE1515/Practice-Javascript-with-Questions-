// Basic Usage
// Double each number in an array.

let myArray = [1,2,3,4,5,6,7,8,9]
const result = myArray.map(  function (number) {
    return number * 2
})
// console.log(result);

 // the difference betwwen foreach and map is map is retun the value but forach not return the vslue


// const result1 = myArray.forEach(  function (number) {
//     return number * 2
// })
// console.log(result1);


// Convert an array of strings to uppercase.
const NameArray = ["shubham", "rohit", "akash", "girish", "omkar" , "amol"]

const uppercase = NameArray.map( (value) => value.toUpperCase())
console.log(uppercase);


// Extract a specific property from an array of objects.
const products = [
    { name: 'Product A', price: 25 },
    { name: 'Product B', price: 15 },
    { name: 'Product C', price: 30 },
    { name: 'Product D', price: 20 }
  ];

  const property = products.map( function (item) {
    const{ price} = item
    return price
  })

//   console.log(property);


// Intermediate Level
// Create a new array of objects with transformed data.
const products1 = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 }
  ];
  
  const discountedProducts = products1.map(product => ({
    id: product.id,
    name: product.name,
    discountedPrice: product.price * product.price
  }));
  
  console.log(discountedProducts);

// Convert an array of numbers to their square roots.
const products3 = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 }
  ];
  
  const discountedProducts1 = products1.map(product => ({
    id: product.id,
    name: product.name,
    discountedPrice: product.price * product.price
  }));
  
  console.log(discountedProducts);
// Create a new array of strings from an array of objects.



// Advanced Level
// Combine map() with other array methods like filter() or reduce().
// Handle edge cases and potential errors in the mapping function.
// Create custom mapping functions for complex transformations.