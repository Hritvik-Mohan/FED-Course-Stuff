// const binarySearch = (array, target) => {
//     return binarySearchHelper(array, target, 0, array.length - 1);
// }

const binarySearch = (array, target, left, right) => {
    if (left > right) {
        return false;
    }
    let mid = Math.floor((left + right) / 2);
    if (target === array[mid]) return mid;
    else if (target < array[mid]) {
        return binarySearch(array, target, left, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, right);
    }
}

let num = [2, 7, 8, 9, 10, 13, 17, 19, 21];

console.log(binarySearch(num, 10, 0, num.length - 1));