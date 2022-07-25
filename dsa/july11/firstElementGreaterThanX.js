function firstElementGreaterThanX(arr, x) {
    let start = 0, end = arr.length -1, greaterThanX;
    while(start <= end) {
        let mid = Math.floor(start + (end-start) / 2);
        if(arr[mid] <= x) {
            start = mid + 1;
        } else if(arr[mid] > x) {
            greaterThanX = mid;
            end = mid - 1;
        }
    }
    return greaterThanX;
}

console.log(firstElementGreaterThanX([1,2,3,4,5,6,7,8,9], 4));