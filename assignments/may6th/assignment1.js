// Requirements: 1) Write a method that accepts an array of integers 
//                  and updates every element with multiplication of previous 
//                  and next elements.



function arrayMultiplication(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) { 
            // if the element at first index i.e [0] so there is no previous element,
            // multiply the element at [i] by the next element i.e [i+1]
        
            arr[i] = arr[i] * arr[i + 1];  

        } else if (i === arr.length - 1) { 
            // if the element is at the end of the array so there is no next element,
            // multiply the element at [i] by previous element i.e [i-1]
        
            arr[i] = arr[i] * arr[i - 1];

        } else {
            // if the element is not at [0] index 
            // and it's also not at the last index i.e somewhere in the middle,
            // multiply the element at [i] by the previous element and the next element

            arr[i] = arr[i] * arr[i - 1] * arr[i + 1];
        
        }
    }
    return arr;
}

let output = arrayMultiplication([1, 2, 3, 4, 5]);
console.log(output); // [ 2, 12, 144, 2880, 14400 ]