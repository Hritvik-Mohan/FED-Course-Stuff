// Write a function, unique, that in an array
// and returns a new array containing the unique elements.
//
// Example:

// unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']);
// ['cat', 'dog', 'rat', 'bird']


const unique = array => {
    const onlyUnique = new Set();

    for(let i = 0; i < array.length; i++) { 
        const ele = array[i];
        onlyUnique.add(ele);
    }

    return Array.from(onlyUnique);
};


console.log(unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']));