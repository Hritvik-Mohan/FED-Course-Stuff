//? Iterative Implementation

let nums = [2,7,8,9,10,13,17,19,21];

// its gonna take an array of sorted numbers, and a target.
const binarySearch = (array, target) => { 
    // Step 1: We're going to set the left and right markers.
    let left = 0;
    let right = array.length - 1;

    // Then we're going to determine, how we're going to loop.
    // Because we don't know how many times we'll need to loop.
    // We also don't want to check every single element in the array, if we could avoid it.

    // We're going to keep searching as long as there's elements left for us to seach.

    while(left <= right) { // we'll keep searching 
        // with each search we're going to have to determine what the mid is
        let mid = Math.floor((left + right) / 2);
        
        // Now that we've our mid we can do the comparision
        if(target === array[mid]) {
            return mid;
        } else if (target < array[mid]){
            // ignore everything on the righthand side.
            right = mid - 1; 
        } else {
            // ignore everything on the lefthand side.
            left = mid + 1;
        }
    }
    return false;
}

console.log(binarySearch(nums, 7)); 
// If it returns the target that it found, we'll return the index - where the element is located.
console.log(binarySearch(nums, 15)); 
// If the target is not found, we'll return false.

