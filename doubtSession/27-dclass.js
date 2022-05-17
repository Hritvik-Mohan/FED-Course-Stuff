// ======================= REVERSE A STRING ==========================

// let updated_string = "";
// function reverseString(string_value){
//     for (let i = string_value.length - 1; i >= 0; i--) {
//         // i = 13; i>=0; i-- updatingstring +=
//         updated_string += string_value[i];
//     }
//     return updated_string;
// }
// const input_string = "Coding is Fun";
// const output = reverseString(input_string);
// console.log(output);

// =================================================









// ======================= PRIME NUMBER ==========================
// Only divisible by 1 and itself

// let lowerNumber = 10
// let higherNumber = 20;

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are: `);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = false;

//     // looping though 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if(i % j == 0){
//             flag = true;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if(i > 1 && flag == false){
//         console.log(i);
//     }
// }



// ======================= Fibb ==========================

// let number = 6;

// var n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series: ');

// for (var i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }









// program to find the HCF of two integers

let hcf;
// take input
let number1 = 4;
let number2 = 16;

//min=number1<number2?num1?num2;
// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {
  // check if is factor of both integers
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
  }
}

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);









// // CONVERTING A DECIMAL INTO BINARY FORM
// function convertToBits(n){
//     let n = 25
//     let result = "";
//     while(n){
//         let rem = n % 2;
//         result = result + rem;
//         n = parseInt(n/2);
//     }
//     return result
// }

// // REVERSING THE RESULT
// console.log(result.split("").reverse().join(""))