/**
 * Requirements: Write an efficient algorithm to search a value in a 2D matrix 
 * in which the rows are in sorted order and the first integer of each row 
 * is greater than the last integer of the previous row.
 */


function searchMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;
}


let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];

console.log(searchMatrix(matrix, 20));