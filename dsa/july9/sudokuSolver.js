// Sudoku Solver

function canWePlaceNumber(r, c, k){

}

function sudokuSolver(arr){

}

// Knight's Tour

let grid = [];
let n = 5;
for(let i = 0; i < n; i++) {
    let temp = Array(n).fill(-1);
    grid.push(temp);
}

function solvingKnightTour(i, j, step) {
    // base case
    if(i < 0 || j < 0 || i >= n || j >= n || grid[i][j] != -1) {
        // then either the cell is outside or already visited
        return;
    }
    if(step == n*n - 1) {
        // we have completed the tour, last step
        grid[i][j] = step;
        let str = "";
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++) {
                str += grid[i][j] + " ";
            }
            str += "\n";
        }
        console.log(str);
        console.log("*****");
        grid[i][j] = -1;
        return;
    }

    grid[i][j] = step; // set the state
    solvingKnightTour(i+1, j+2, step+1);
    solvingKnightTour(i+2, j+1, step+1);
    solvingKnightTour(i-1, j+2, step+1);
    solvingKnightTour(i-2, j+1, step+1);
    solvingKnightTour(i+1, j-2, step+1);
    solvingKnightTour(i+2, j-1, step+1);
    solvingKnightTour(i-1, j-2, step+1);
    solvingKnightTour(i-2, j-1, step+1);
    grid[i][j] = -1; // revert the state
}

// solvingKnightTour(0, 0, 0);




// Squareful Arrays

function SquarefulArrray() {
    
}