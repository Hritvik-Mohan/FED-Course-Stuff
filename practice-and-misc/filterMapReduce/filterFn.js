// filter function is used to filter out the values inside an array
const arr = [5, 1, 3, 2, 6];

// odd, value > 4, even no.(s), divisibility check

// filter odd values

function isOdd(x){
    // return x%2!==0 // // zero is a flasy value
    return x % 2
}

function isEven(x){
    return x % 2 == 0
}

function greaterThan4(x){
    return x > 4;
}

const odd = arr.filter(isOdd)

const even = arr.filter(isEven)

const greatFour = arr.filter(greaterThan4)

console.log(odd);

console.log(even);

console.log(greatFour);

let x = 4;
let y = 5;



console.log(x%2); // 0 <- remainder, but 0 is falsy value
console.log(x%2==0) // true - comparison

console.log(y%2); // 1 <- remainder, but 1 is truthy value
console.log(y%2==0) // flase - comparison

 