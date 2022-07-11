// const fact = n => n==0 ? 1 : n * fact(n-1);


// function fact(n){
//     if(n == 0) return 1;
//     return n * fact(n-1);
// }

// console.log(fact(1000));

function fib(n){
    if(n < 2) return n;
    return fib(n-1)+fib(n-2);
}

console.log(fib(100))

// function fact2(n){
//     let multi = 1;
//     for(let i = 1; i<=n; i++){
//         multi *= i;
//     }
//     return multi;
// }

// console.log(fact2(1000))