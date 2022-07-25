// Q2: Find the index of 0 to be replaced to get the maximum length sequence of continuous ones.

// Problem statement: Given a binary array, find the index of 0 to be replaced with 1 to get the maximum length sequence of continuous ones.

// Sample:
// consider the array { 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 }. We need to replace index 7 to get the continuous sequence of length 6 containing all 1’s.


function replace0MaxLength(arr) {

    let max_count = 0;
    let max_index = 0;
    let prev_zero = -1;
    let prev_prev_zero = -1; 

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            if(i - prev_prev_zero > max_count) {
                max_count = i - prev_prev_zero;
                max_index = prev_zero;
            }

            prev_prev_zero = prev_prev_zero;
            prev_zero = i;
        }
    }
    if (arr.length - prev_prev_zero > max_count) {
        max_index = prev_zero;
    }
    return max_index;
}

let arr = [0, 0, 1, 0, 1, 1, 1, 0, 1, 1];
console.log(replace0MaxLength(arr));