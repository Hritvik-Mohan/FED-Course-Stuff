const doubler = (items) => {
    let newArray = []; // grows over time

    for (let i = 0; i < items.length; i++) { //
        newArray.push(items[i]);
        newArray.push(items[i]);
    } // 2n

    return newArray;
};
// O(n), where n is the length of the input array

console.log(doubler(['a', 'b', 'c'])); // ['a', 'a', 'b', 'b', 'c', 'c']