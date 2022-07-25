const arr = ['cat', 'dog', 'rat', 'dog', 'cat', 'bird'];

// Write a function, unique, that in an array
// and returns a new array containing the unique elements.
//
// Example:

// unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']);
// ['cat', 'dog', 'rat', 'bird']


const unique0 = array => {
    let newArray = []; // create a new array

    for(let i = 0; i < array.length; i++) { // iterate through the input array
        let ele = array[i]; // for every element of this innput array
        if(!newArray.includes(ele)){ // is that element not already included in my array array
            newArray.push(ele);
        }
    }

    return newArray;
};


console.log(unique0(arr));


// Bad 🙅🏻‍♀️
const unique = arr => { // O(n^2)
    const uniqueArr = [];
    for(let i = 0; i < arr.length; i++){ // O(n)
        if(!uniqueArr.includes(arr[i])) uniqueArr.push(arr[i]); // O(n)
    }

    return uniqueArr;
}

// Better 👍
const unique2 = arr => {
    const itemSet = new Set();
    arr.forEach((item)=>{
        itemSet.add(item);
    })

    return [...itemSet];
}

// One liner best 😎
const unique3 = arr => [...new Set(arr)];