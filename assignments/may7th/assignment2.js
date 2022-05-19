// Requirements: Write code for finding the smallest element in an array.


function smallest(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr = [ 7, 2, 3, 4, 6];

console.log(smallest(arr)); // 2






// function smallestElement(arr){
//     let smallest = arr[0];
//     for (let element of arr){
//         if(smallest > element){
//             smallest = element  
//         }
//     }
//     return smallest;
// }



// Solution

// let arr=[5,4,3,6,4,2];
// let smallestElem=arr[0];
// for(let i=1;i<arr.length;i++){
//   if(arr[i]<smallestElem){
//   smallestElem=arr[i];
//   }
// }
// console.log("Smallest element in array is ",smallestElem);