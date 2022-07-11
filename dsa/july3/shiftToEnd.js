function arrangePosNeg(arr) {
    let negative = [];
    let positive = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative.push(arr[i]);
        } else {
            positive.push(arr[i]);
        }
    }
    let sortedArray = positive.concat(negative);

    return sortedArray;
}

let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

console.log(arrangePosNeg(arr));