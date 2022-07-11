const boom = n => { // n
    for(let i = 0; i < 3; i++) { // 3
        bam(n); // n
    } // 3n
    
    for (let k = 0; k < 10000; k++) { // 10000
        console.log(k);
    }
}; 
// 3n + 10000 -> n

const bam = m => {
    for (let j = 0; j < m; j++) {
        console.log(j);
    }
} 

boom(10);