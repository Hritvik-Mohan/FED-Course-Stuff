const foo = n => {
    for (let a = 0; a < n / 2; a++) {
        console.log(a);
    }
    // n/2 -> n

    for(let b = 0; b < n; b++) { // n
        for(let c = 0; c < n; c++) { // n
            console.log(b + "," + c);
        }
    } // n* n -> n^2
};
// n + n^2 -> n^2
// O(n^2), where n is the size of the input

foo(10); 