const fruits  = ['banana', 'apple', 'mango', 'orange', 'grapes', 'preach']



//for of loop cha use iterabal opetaot ver hoto   ---> string, array, nodelist var use karu sakto
// for(let fruit of fruits){
//     console.log(fruit);
// }

// const usre = "Kunal shinde";

// for(const letter of usre){
//     console.log(letter);
// }


const person = {
    firstName: 'kunal',
    lastName: 'shinde',
    age: 21,
    eyecolor:'black',
    city: 'Pune'
}
// for in cha use karun apan object varti loop karu shakto

// for(const key in person){
//     console.log(key, ':' ,person[key]);
// }


const pesonKeys = Object.keys(person)

for(const key of pesonKeys){
    console.log(person[key]);
}
