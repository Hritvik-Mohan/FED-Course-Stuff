/* 
Q. Given an array A of n integers, write a program (using rest parameters 
    and different methods of array) to calculate the mean, median and mode.
*/

// approach 1
let mean1 = (nums) => {

    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    console.log("Mean using first approach: " + sum / nums.length);

}

// using rest parameters
const mean = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length

const nums1 = [3, 5, 4, 4, 1, 1, 2, 3];
const nums2 = [1, 2, 3];

mean1(nums1);
mean1(nums2);

console.log("Mean using second apporach: " + mean(...nums1));
console.log("Mean using second apporach: " + mean(...nums2));

console.log("Mean using second apporach: " + mean(...[3, 5, 4, 4, 1, 1, 2, 3]));
console.log("Mean using second apporach: " + mean(...[1, 2, 3]));


let median = (nums) => {
    let m = 0;
    let n = nums.length;
    nums.sort((a, b) => a - b); //sorting the array in the accending order

    if (n % 2 == 0) { //even

        let a = nums[(n / 2) - 1];
        let b = nums[(n / 2) + 1];

        console.log(a, b);

        m = (nums[(n / 2) - 1] + nums[(n / 2) + 1]) / 2;
    } else {
        // m = nums[n/2]; // 1.5 is not a valid index
        m = nums[parseInt(n / 2)];
    }
    return m;
}

console.log("Median using first apporach: " + median(nums1));
console.log("Median using first apporach: " + median(nums2));

let hm = new Map();

let mode = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        if (hm.has(nums[i]) == false) { //
            hm.set(nums[i], 1);
        } else {
            let count = hm.get(nums[i]);
            count++;
            hm.set(nums[i], count);
        }
    }
    let modArray = [];
    for (let [key, value] of hm) {
        if (value > 1) {
            modArray.push(key);
        }
    }

    return modArray;
}

let nums3 = [3, 5, 4, 4, 1, 1, 2, 3, 3, 5, 4, 4, 1, 1, 2, 3, 4, 4, 1, 1, 2, 3, 3, 5];

console.log("Mode is " + mode(nums3));


console.table(hm);