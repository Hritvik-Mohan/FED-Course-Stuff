// ======================= PRIME NUMBER ==========================
// Only divisible by 1 and itself

let lowerNumber = 10
let higherNumber = 20;

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are: `);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = false;

    // looping though 2 to user input number
    for (let j = 2; j < i; j++) {
        if(i % j == 0){
            flag = true;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if(i > 1 && flag == false){
        console.log(i);
    }
}


// function isPrime(n) {
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n%i==0){
//             return false;
//         }
//         return true;
//     }
// }

// console.log(Math.sqrt(11));

// let n = 5;

// if(isPrime(n)){
//     console.log("PRIME");
// } else{
//     console.log("NOT A PRIME");
// }




