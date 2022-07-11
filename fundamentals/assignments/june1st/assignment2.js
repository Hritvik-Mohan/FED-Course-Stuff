function binarySearch(sortedArray, searchValue, minIndex, maxIndex) {
    var currentIndex;
    var currentElement;
    while (minIndex <= maxIndex) {
        var middleIndex = (minIndex + maxIndex) / 2 | 0; //find middle index
        currentElement = sortedArray[middleIndex];
        if (currentElement === searchValue) {
            return middleIndex;
        }
        if (currentElement < searchValue) {
            return binarySearch(sortedArray, searchValue, middleIndex + 1,
                maxIndex);
        }
        if (currentElement > searchValue) {
            return binarySearch(sortedArray, searchValue, minIndex, middleIndex -
                1);
        }
    }
    return -1;
}


var sortedArray = [0, 1, 2, 3, 4, 5, 6];
var valueToFind = 5;
var minIndex = 0;
var maxIndex = sortedArray.length - 1;
var result = binarySearch(sortedArray, valueToFind, minIndex, maxIndex);
if (result >= 0) {
    console.log(`Number ${sortedArray[result]} found at position:
    ${result+1}`);
} else {
    console.log("Number not found");
}