// let num1 = prompt("Enter first number: ");
// let a = +num1;

// if (a !== isNaN) {

//     alert("Enter a number.");

// } else {

//     let num2 = prompt("Enter second number: ");
//     let b = +num2;

//     if (b !== isNaN) {
//         alert("Enter a number.");
//     } else {

//         let result = 0;

//         let opt = prompt("Enter an operator ( +, -, /, *, % ): ");

//         let ab = `${a} ${opt} ${b} `;

//         switch (opt) {

//             case '+':
//                 result = a + b;
//                 break;

//             case '-':
//                 result = a - b;
//                 break;

//             case '/':
//                 result = a / b;
//                 break;

//             case '*':
//                 result = a * b;
//                 break;

//             case '%':
//                 result = a % b;
//                 break;

//             default:
//                 alert("Enter the correct operator ( +, -, /, *, % )");
//         }

//         alert(`${ab}= ${result}`);

//     }

// }




// let num1 = prompt("Enter first number: ");
// let a = +num1;
// let num2 = prompt("Enter second number: ");
// let b = +num2;

// if (a !== isNaN || b !== isNaN) {

//     alert("Enter a number.");

// } else {

//     let result = 0;

//     let opt = prompt("Enter an operator ( +, -, /, *, % ): ");

//     let ab = `${a} ${opt} ${b} `;

//     switch (opt) {

//         case '+':
//             result = a + b;
//             break;

//         case '-':
//             result = a - b;
//             break;

//         case '/':
//             result = a / b;
//             break;

//         case '*':
//             result = a * b;
//             break;

//         case '%':
//             result = a % b;
//             break;

//         default:
//             alert("Enter the correct operator ( +, -, /, *, % )");
//     }

//     alert(`${ab}= ${result}`);

// }




let num1 = prompt("Enter first number: ");
let a = +num1;
let num2 = prompt("Enter second number: ");
let b = +num2;

let result = 0;

let opt = prompt("Enter an operator ( +, -, /, *, % ): ");

let ab = `${a} ${opt} ${b} `;

switch (opt) {

    case '+':
        result = a + b;
        break;

    case '-':
        result = a - b;
        break;

    case '/':
        result = a / b;
        break;

    case '*':
        result = a * b;
        break;

    case '%':
        result = a % b;
        break;

    default:
        alert("Enter the correct operator ( +, -, /, *, % )");
}

alert(`${ab}= ${result}`);