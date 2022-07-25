const unique = arr => {
    const itemSet = new Set();
    arr.forEach((item)=>{
        itemSet.add(item);
    })

    return [...itemSet];
}

const arr = ['cat', 'dog', 'rat', 'dog', 'cat', 'bird'];

console.log(unique(arr));