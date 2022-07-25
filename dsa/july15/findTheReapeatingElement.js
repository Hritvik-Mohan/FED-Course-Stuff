// // Given a sorted array where every element is present once and one element is present twice. Find the repeating element.

const e = require("express");

// const findRepeat = arr => {
//     let repeatingElement = 0;

//     for(const ele of arr) {
//         if(ele) {
//             ele = 1;
//         }
//     }

//     return repeatingElement;
// }

// let arr = [1,3,4,4,5,6,7,9,11]


// Given a sorted array and an element X, check if the element is repeated

const repeated = (arr, x) => {
    for(let i = 0; i<arr.length; i++){
        if((arr[i] == x) && (arr[i+1]==x)) return true;
    }
    return false;
}

let x = 13;
let arr = [1,2,3,3,4,5,5,6,7,7,8,8,8,9,11,13,13];

console.log(repeated(arr, x));