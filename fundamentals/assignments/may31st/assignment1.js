function sum(array, i){
    if(array.length === 0){
        return 0;
    }
    console.log(array[i]);
    if(i === array.length-1){
        return array[i];
    }
    return array[i] + sum(array, i+1)
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 0))



// function display(array, i){
//     console.log(array[i]);
//     if(i === array.length-1){
//         return array[i];
//     }
//     return display(array, i+1)
// }

// display([1, 2, 3, 4, 5, 6, 7, 8, 9], 0);