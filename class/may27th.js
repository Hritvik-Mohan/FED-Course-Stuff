// function findElement(arr, ele){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]==ele){
//             return arr[i];
//         }
//     }
// }


// let arr = [1,2,3,4,5,6];
// console.log(findElement(arr, 4));






// function search(input){
//     let result = input[0];
//     for(let i = 1; i < input.length; i++){
//         result = result ^ input[i];
//     }
//     return result;
// }

// console.log(search([1,2,3,3,1,]));



/**
 * Find pairs of elements in array A the sum of pair is equal to N
 * Example  : [10,20,10,40,50,70] N = 50
 * o/p      : [2,3]
 */

/*
Q.  Given an array A, where only one element can have single occurrence while 
    the other will have two occurrence. You have to find out the element 
    having a single occurrence.
    
    Input: [ 1, 2, 1, 2, 5, 4, 5, 6, 7, 7, 6 ]
    
    Output:4
*/

// ?previous code from JS Video Library

// const arr = [1,1,2,2,2,3,3,6,6,3,3,4,4,4,4,4,9]

// // key -> numbers
// // pair -> count of those numbers

// let hm = new Map();

// for(let i=0; i<arr.length; i++){

//     if(hm.has(arr[i]) == false){ // if value is not there in the hashmap

//         hm.set(arr[i], 1); // insert the value in the hashmap

//     } else { // update the count

//         let count = hm.get(arr[i]);
//         count++;
//         hm.set(arr[i], count);

//     }

// }

// console.table(hm);
// console.log(hm);

// for(let [key, value] of hm){
//     if(value !== 2){
//         console.log(`${key} is occuring ${value} times.`);
//     } else {
//         console.log(`${key} is occuring ${value} time.`);
//     }
// }




// function findPairs(inputArr, N){
//     var m = inputArr.length;
//     for(let i = 0; i < m; i++){
//         for(let j = i+1; i < m; j++){
//             if(inputArr[i] + inputArr[j] == N){
//                 return [i,j];
//             }
//         }
//     }
//     return null;
// }

// console.log(findPairs([10,20,10,40,50,70], 60));





// function findPairs(inputArr, N){
//     var hash = [];
//     for(let i = 0; i < inputArr.length; i++){
//         var key = inputArr[i];
//         // var diff = N - inputArr[i];
//         // if(hash[diff]){
//         if(hash[key]!= null){
//             return [i, hash[diff]]
//         }
//         hash[diff] = i;
//         console.log(hash)
//     }
//     return null;
// }

// console.log(findPairs([10,20,10,40,50,70], 60));


// i = 0, 1, 2
// key = 10, 20, 10
// hash (40:0), (20:1),



// function pairs(arr, target){
//     var map = [];
//     var indexes = [];

//     for(let i = 0; i < arr.length; i++){
//         if(map[arr[i]] != null){
//             var index = map[arr[i]];
//             indexes[0] = index;
//             indexes[1] = i;
//             return indexes;
//         }
//         else {
//             map[target - arr[i]] = i;
//         }
//     }
// }

// console.log(pairs([10,20,10,40,50,70], 60));














// Divyansh Agarwal's solution


// let a = [10,20,10,40,50,70];
// let N=50;

// function findPairs(a,N)
// {
//   for(let i=0;i<a.length;i++)
//   {
//   if(a.indexOf(N-a[i]) >-1)
//   {
//   return [i,a.indexOf(N-a[i])]
//   }
//     }
// }

// console.log(findPairs(a,N));


// Ruhani's solution

// function pair(arr,N){
//     let n=arr.length;
//     let obj={};
//     let i=0;
//     for( i=0;i<n;i++){
//         var c= N-arr[i];
//         if(c in obj ){
//             return[obj[c],i];

//         }
        
//         obj[arr[i]]=i;
        

//     }
   

// }
// let arr=[10,20,10,40,50,70];
// console.log(pair(arr,50));


// Question 4

// You have an array of n elements. Your jobs is to find the
// element that is in majority.
// Any elements whose count is greater than n/2 will considered
// as a majority element.

// Input: [3,1,3,3,2]


// function majority(input){
//     var n = input.length;
//     // let count = 0;
//     for(let i = 0; i<n; i++){
//         var count = 1;
//         for(let j = i; j<n; j++){
//             if(input[i] == input[j]){
//                 count++;
//             }
//             if(count > n/2){
//                 return input[i];
//             }
//         }
//     }
//     return null;
// }

// console.log(majority([1,2,2,3,3]))


// 3,1,3,3,3,2



// Quetion 5
// Find the intersection of two sorted arrays. OR in other words,
// Given 2 sorted arrays, find all the elements which occur in both
// the arrays.

// Input: A: [1 2 3 4 5 6] B: [3 3 5]

// op = [3 3 5]


function commonNumb(arr1, arr2){
    var n = arr1.length;
    var m = arr1.length;
    let c = {};
    for(let i = 0; i<n; i++){
        var count = 1;
        for(let j = i; j<m; j++){
            if(arr1[i] == arr2[j]){

            }
        }
    }

}






// Divyansh Agarwal
// we will just run two for loops 
// and push the conditional number in another array

// function commonNumb(a,b)
// {
//   let c = [];
//   for(let i of a)
//   {
//     for(let j of b)
//     {
//       if(i===j)
//       {
//         c.push(i);
//       }
//     }
//   }
//   return c;
// }