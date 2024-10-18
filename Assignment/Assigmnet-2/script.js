// 1 .password validation 

/*
let myPass = "kunal"
let pass = prompt("Enter Your Pass Word")
if(myPass == pass){
    document.getElementById("res").innerText = ` Password matched ,Password validation Succesful.`
}else{
    document.getElementById("res").innerText = `Password did not matched`
}

 */

// Calculator

// function calculator(num1, num2, operator) {
//     let result;
    
//     switch (operator) {
//       case '+':
//           result = num1 + num2;
//         break;
//         case '-':
//             result = num1 - num2;
//             break;
//             case '*':
//                 result = num1 * num2;
//                 break;   
                
//                 case '/':
//                     if (num2 === 0) {
//                         console.log("Division by zero is not allowed");
//                         return;
//                     }
//                     result = num1 / num2;
//                     break;
//       default:
//         console.log("Invalid operator");
//         return;
//     }
    
//     console.log(result);   
    
// }

// calculator(9,8,"+")



// HIGHEST MARKS

const markArr = [80, 75, 91, 63, 65, 45,96, 32, 78, 85]
let check = markArr[0]

for (let i = 0; i < markArr.length; i++) {

    if(markArr[i] > check){
        check = markArr[i]
    }
}
console.log(check);

 





