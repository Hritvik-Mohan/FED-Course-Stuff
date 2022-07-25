// Given a sorted rotated array, find the min element in less than O(n). [4,5,6,7,1,2]

// const findMin = arr => {
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++) if(min > arr[i]) min = arr[i];
//     return min;
// }

// let arr = [4,5,6,7,1,2];

// console.log(findMin(arr));







const findMin = arr => {
    let lo = 0;
    let hi = arr.length - 1;

    if (high < low) return 0;
    if (high == low) return low;

    let mid = Math.floor(low + (high - low) / 2);
    if (mid < high && arr[mid + 1] < arr[mid])
        return (mid + 1);
    if (mid > low && arr[mid] < arr[mid - 1])
        return mid;
    if (arr[high] > arr[mid]) return countNumberOfRotations(arr, low, mid - 1);

    return countNumberOfRotations(arr, mid + 1, high);
}

let arr = [4, 5, 6, 7, 1, 2];

console.log(findMin(arr));