// Reduce does not reduce anything
const arr = [5, 1, 3, 2, 6];

// sum or max

function findSum(arr) {
    let sum = 0; // accumulator
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];// current is arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0); 

console.log(output)


function findMax(arr) {
    let max = 0; // accumulator
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];   
        } // current is arr[i];
    }
    return max;
}

console.log(findMax(arr));

const max = arr.reduce(function(max, curr){
    if(curr>max){
        max = curr
    }
    return max
}, 0);

console.log(max);


