const zap = (n) => {
    if(n < 1) {
        console.log('blastoff!');
        return;
    }
    
    console.log(n);
    zap(n-2);
};

zap(10);
// 10
// 8
// 6
// 4
// 2
// blastoff!

// n/2 function calls
// Time: O(n)
// Space: O(n) 