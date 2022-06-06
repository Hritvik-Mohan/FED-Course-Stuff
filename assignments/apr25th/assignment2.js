// Create a program to print all palindromes under 50

// Approach 1
// function palindromesNum(i) {
//     let rem;
//     let temp = i;
//     let rev = 0;

//     while (i > 0) {
//         rem = i % 10;
//         i = parseInt(i / 10);
//         rev = (rev * 10) + rem;
//     }

//     if (rev == temp)
//         return true
//     else
//         return false
// }

// for (i = 0; i <= 50; i++) {
//     if (palindromesNum(i)) {
//         console.log(i);
//     }
// }


// -------------------------------------------------------------------------------------


// Approach 2
// function isPalindrome(num){
//     let length = num.length;
//     for(let i = 0; i < length/2; i++){
//         if(num[i] !== num[length - 1 - i]){
//             return false;
//         }
//     }
//     return true;
// }

// for(let i=0;i<=50;i++){
//     if(isPalindrome(i.toString())){
//         console.log(i);
//     }
// }

//-----------------------------------------------------------------------------------------------

// Approach 3
// for (let i = 0; i <= 50; i++) {
//     let num = i;
//     if (num == num.toString().split("").reverse().join("")) console.log(num);
// }




























// function primePalindrome(number){

//     if(number > 1){
//         for(let i = 2; i < number; i++){
//             let isPrime = true;
//             for(let j = 2; j < i; j++){
//                 if(i % j == 0){
//                     isPrime = false;
//                     break;
//                 }
//             }
//             if(i > 1 && isPrime == true){

//             }
//     }
// }

// }


// primePalindrome(50);