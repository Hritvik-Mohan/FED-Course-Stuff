// Given an array of length n, where elements are sorted, all the elements are unique but one element is present twice, and the elements lie in the range [0, n-2]. Find the repeating element.

const repEle = arr => {
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        if(arr[mid] == x) return mid;
        if(arr[mid] > x) {
            end = mid - 1l
        }
    }
}

let arr = [0, 1, 2, 3, 3, 4, 5, 6, 7, 8];