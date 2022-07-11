const bar = n => {
    for(let i = 0; i < 3; i++) { // 3
        for(let j = 0; j < n; j++) { // n
            console.log(j);
        }
    } // 3 * n -> 3n -> n

    for (let k = 0; k < 10000; k++) {
        console.log(k);
    } // k (ignore)
}; 
// 3n + 10000
// n

bar(10); 