// CONVERTING A DECIMAL INTO BINARY FORM

// let n = 25
// let result = "";
// while(n){
//     let rem = n % 2;
//     result = result + rem;
//     n = parseInt(n/2);
// }
// // REVERSING THE RESULT
// console.log(result.split("").reverse().join(""))

// 25%2 = 1, result = 1
// 12%2 = 0, result = 10
// 6%2 = 0, result = 100
// 3 %2 = 1, result = 1001
// 1%2 = 1, result = 10011
// 0

// then reverse it
// 11001

// CONVERTING A DECIMAL INTO BINARY FORM
function convertToBits(n){
    let result = "";
    while(n){
        let rem = n % 2;
        result = result + rem;
        n = parseInt(n/2);
    }
    return result
}

// REVERSING THE RESULT
console.log(result.split("").reverse().join(""))