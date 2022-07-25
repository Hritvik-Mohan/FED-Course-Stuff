function binarySearch(arr, x) {
    let start = 0; end = arr.length -1;
    while(start <= end) {
        let mid = Math.floor(start + (end-start) / 2);
        if(arr[mid] == x) return mid;
        if(arr[mid] > x) {
            end = mid - 1;
        } else { 
            start = mid + 1;
        }
    }
    return undefined;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4));