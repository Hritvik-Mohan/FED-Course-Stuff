// /**
//  * Given a positive integer A, find a pair of integer a, b such that
//  * a and b are positive
//  * A <= B
//  * a^2 + b^2 = A
//  * 0<=A<=100000
//  */

// // Using for loop


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   readline.question(`Enter a number`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
//   });


// function findPair(A){
//         for(let a = 0; a<A; a++){
//             for(let b = 0; b<A; b++){
//                 if(a*a + b*b == A && a<=b){
//                     console.log(a, b)
//                 }
//             }
//         }
// }

// let A = 50;
// findPair(A);


// Using while loop

// function findPair2(A){
//     let a = 0;
//     while(a*a < A){
//         let b = 0;
//         while(b*b < A){
//             if(a*a+b*b == A && a<=b){
//                 console.log(a, b);
//             }
//             b++;
//         }
//         a++;
//     }
// }

// findPair2(50);












// function findPair(A){
//         for(let a = 0; a<A; a++){
//             for(let b = 0; b<A; b++){
//                 if(a**2 + b**2 == A){
//                     if(a<=b) console.log(a, b)
//                 }
//             }
//         }
// }

// let A = 50;
// findPair(A);


// function findPair2(A){
//     let a = 0;
//     while(a*a < A){
//         let b = 0;
//         while(b*b < A){
//             if(a*a+b*b == A){
//                 if(a<=b) console.log(a, b);
//             }
//             b++;
//         }
//         a++;
//     }
// }

// findPair2(50);



const squareSum = A => {
  let a = 0;
  while (a * a < A) {
    let b = 0;
    while(b * b < A) {
      if(a * a + b * b == A) {
        if(a <= b) {
          console.log(a, b);
        }
      }
      b += 1;
    }
    a += 1;

  }
}

squareSum(50)