function countNumberOfRotations(arr, low, high) { // array, lo, hi

    if (high < low)
        return 0;


    if (high == low)
        return low;

    let mid = Math.floor(low + (high - low) / 2);


    if (mid < high && arr[mid + 1] < arr[mid])
        return (mid + 1);


    if (mid > low && arr[mid] < arr[mid - 1])
        return mid;

    if (arr[high] > arr[mid])
        return countNumberOfRotations(arr, low, mid - 1);

    return countNumberOfRotations(arr, mid + 1, high);
}


let arr = [15, 18, 2, 3, 6, 12];
let n = arr.length;
console.log(countNumberOfRotations(arr, 0, n - 1));