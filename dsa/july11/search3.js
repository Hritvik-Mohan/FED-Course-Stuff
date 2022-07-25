function search(arr, n) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == n) return arr[i];
    }
    return "Not found";
}

console.log(search([4, 5, 2, 7, 0, 1, 3, 5, 6], 3));