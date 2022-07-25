const recursiveBinarySearch = (arr, target, start, end) => {
    // Base Condition
    if (start > end) {
        return 'Not Found';
    }

    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === target) {
        return `Found it at index ${mid}`;
    }

    if(arr[mid] > target) {
        return recursiveBinarySearch(arr, target, start, mid-1);
    }

    if(arr[mid] < target) {
        return recursiveBinarySearch(arr, target, mid+1, end);
    }
}


const arr = ['a','b','c','x','y','z'];

let start = arr[0];
let end = arr[arr.length-1];
let target = 'y'

console.log(recursiveBinarySearch(arr, target, start, end));