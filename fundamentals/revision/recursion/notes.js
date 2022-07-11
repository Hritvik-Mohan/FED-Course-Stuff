
// const prime=(num)=>{
//     const n=num/2;
//   for (let i = 2; i <= n+1; i++) {
//     if(num%i==0){
//       return console.log("not prime")
//     }
//   }
//     return console.log('isPrime')
//   }
//   prime(12);

function fib(n){
    if(n < 2) return n;
    return fib(n-1)+fib(n-2);
}

console.log(fib(100))


// function mergeSort(arr, left, right) {
//     if(left=right) {
//         return;
//     }
//     let mid = parseInt((left+right)/2);
//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid+1, right);
//     merge(arr, left, mid, right);
// }