/*
Q.  Given an array A, where only one element can have single occurrence while 
    the other will have two occurrence. You have to find out the element 
    having a single occurrence.
    
    Input: [ 1, 2, 1, 2, 5, 4, 5, 6, 7, 7, 6 ]
    
    Output:4
*/

const arr = [1,1,2,2,2,3,3,6,6,3,3,4,4,4,4,4,9]

// key -> numbers
// pair -> count of those numbers

let hm = new Map();

for(let i=0; i<arr.length; i++){

    if(hm.has(arr[i]) == false){ // if value is not there in the hashmap

        hm.set(arr[i], 1); // insert the value in the hashmap

    } else { // update the count

        let count = hm.get(arr[i]);
        count++;
        hm.set(arr[i], count);

    }

}

console.table(hm);
console.log(hm);

for(let [key, value] of hm){
    if(value !== 1){
        console.log(`${key} is occuring ${value} times.`);
    } else {
        console.log(`${key} is occuring ${value} time.`);
    }
}


































// function mean(numbers) {
//     var total = 0, i;
//     for (i = 0; i < numbers.length; i += 1) {
//         total += numbers[i];
//     }
//     return total / numbers.length;
// }
 

// function median(numbers) {
//     var median = 0, numsLen = numbers.length;
//     numbers.sort();
 
//     if (
//         numsLen % 2 === 0 // is even
//     ) {
//         // average of two middle numbers
//         median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
//     } else { // is odd
//         // middle number only
//         median = numbers[(numsLen - 1) / 2];
//     }
 
//     return median;
// }
 

// function mode(numbers) {
//     // as result can be bimodal or multi-modal,
//     // the returned result is provided as an array
//     // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
//     var modes = [], count = [], i, number, maxIndex = 0;
 
//     for (i = 0; i < numbers.length; i += 1) {
//         number = numbers[i];
//         count[number] = (count[number] || 0) + 1;
//         if (count[number] > maxIndex) {
//             maxIndex = count[number];
//         }
//     }
 
//     for (i in count)
//         if (count.hasOwnProperty(i)) {
//             if (count[i] === maxIndex) {
//                 modes.push(Number(i));
//             }
//         }
 
//     return modes;
// }

// console.log(mean([1,2,3]))
// console.log(median([3, 5, 4, 4, 1, 1, 2, 3]))
// console.log(mode([3, 5, 4, 4, 1, 1, 2, 3]))