const arr = ['cat', 'dog', 'rat', 'dog', 'cat', 'bird'];
const unique3 = arr => [...new Set(arr)];

console.log(unique3(arr));