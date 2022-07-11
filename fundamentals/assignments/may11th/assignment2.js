/**
 * Requirements: Find the row index which has maximum no. of unique elements in a matrix efficiently.
 */

function findRowIndex(matrix) {
    let max = 0;
    let maxIndex = 0;
    let hm = new Map();
    for (let i = 0; i < matrix.length; i++) {
        let count = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            if (hm.has(matrix[i][j]) == false) {
                count++;
                hm.set(matrix[i][j], 1);
            }
        }
        if (count > max) {
            max = count;
            maxIndex = i;
        }
    }
    return maxIndex;
}

let matrix = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(findRowIndex(matrix));