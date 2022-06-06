// function printStar(n){
//     if(n === 0)
//         return;
//     printStar(n-1);
//     let star = '';
//     for(let i=1; i<=n; i++){
//         star+='* ';
//     }
//     console.log(star);
// }

// printStar(5);

// function appendStar(n) {
//     if(n == 0)
//         return '';

//     return '* ' + appendStar(n-1);
// }




// Factorial
// function factorial(x){
//     if(x<=0) return 1;
//     return x * factorial(x-1);
// }

// console.log(factorial(5));


// fib



// function fib(n) {
//     if(n == 0 || n == 1) return n;
//     return fib(n-1) + fib(n-2);
// }

// function fib(n) {
//     if(n == 0) return 0;
//     if(n == 1) return 1;
//     let smallOutput1 = fib(n-1);

//     let smallOutput2 = fib(n-2);
//     console.log(smallOutput1 + smallOutput2);
// }

// fib(5)


// function fib(n) {
//     if(n == 0 || n == 1) return n;
//     let smallOutput1 = fib(n-1);
    
//     let smallOutput2 = fib(n-2);

//     let arr =  smallOutput1 + smallOutput2;
// }

// console.log(fib(5))

