// Write a function, unique, that in an array
// and returns a new array containing the unique elements.
//
// Example:

// unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']);
// ['cat', 'dog', 'rat', 'bird']


const unique = array => {
    let newArray = []; // create a new array

    for(let i = 0; i < array.length; i++) { // iterate through the input array
        let ele = array[i]; // for every element of this innput array
        if(!newArray.includes(ele)){ // is that element not already included in my array array
            newArray.push(ele);
        }
    }

    return newArray;
};


console.log(unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']));