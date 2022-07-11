//  Requirements: 
//  2) Move all negative numbers to the end 
//  and positive to the beginning of the array 
//  without using any predefined sorting method.

function arraySorting(arr) {
    let negative = []; // empty array
    let positive = []; // empty array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            // pushing the negative numbers inside the negative[] array
            negative.push(arr[i]);
        } else {
            // pushing other numbers that are positive inside the positive[] array
            positive.push(arr[i]);
        }
    }
    // using concat to merge the two arrays
    // storing the returned array by concat() in sortedArray
    let sortedArray = positive.concat(negative);

    return sortedArray;
}

let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

console.log(arraySorting(arr));
/* [
    1,  3,  5,  7,   9,
    -2, -4, -6, -8, -10
]
*/