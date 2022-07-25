// Given a sorted array where every element is present twice except one element. Find the single occurring element. (Element is not given)

const singleOccurring = arr => {
    let singleOccurringNumber;
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === key) {
            return mid;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return singleOccurringNumber;
}

let arr = [1,1,4,4,5,5,11,17,17];