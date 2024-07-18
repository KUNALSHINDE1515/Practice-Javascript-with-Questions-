// Basic Usage
// Filter out even numbers from an array of numbers.

const myArray = [1,2,3,4,5,6,7,8,9,10]

const evenNumber = myArray.filter( (number) => { return number % 2 === 0})
console.log(evenNumber);

// Filter out strings that start with a specific letter.

const nameArr = ["apple", "banana", "cherry", "date", "berry", "bharat"];
const statingLetter = 'b'

const specificLetter = nameArr.filter(  (str) => { return str.startsWith(statingLetter)});
console.log(specificLetter);

// Filter objects in an array based on a property value.

const arrObj = [
    {
        languageName: 'Js',
        FullForm: 'JavaScript'
    },
    {
        languageName: 'py',
        FullForm: 'Pythpon'
    },
    {
        languageName: 'Cpp',
        FullForm: 'C++'
    },
    {
        languageName: 'Java',
        FullForm: 'Java'
    },
]

let pValue = arrObj.filter( (value) => {
    // const {languageName, FullForm} = value    // destrucuting
    // console.log(FullForm,  "-: ",languageName);
    // console.log(value.FullForm,  "-: ",value.languageName);
})

console.log(pValue);

// Intermediate Level
// Filter an array of objects to find objects where a property is greater than a certain value.
const products = [
    { name: 'Product A', price: 25 },
    { name: 'Product B', price: 15 },
    { name: 'Product C', price: 30 },
    { name: 'Product D', price: 20 }
  ];

  let min = 20
const result =  products.filter( (value) => {
     return value.price  < min;
  })
console.log(result);

