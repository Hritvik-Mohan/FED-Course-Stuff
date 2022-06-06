// filter() 

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(
//     function(word){
//         return word.length > 8});

// console.log(result);


// const numbers = [8,4,6,9,2,7,5,0,];

// const res = numbers.filter(
//     function(num){
//         if(num%2!==0)
//         return num
//     }
// )

// console.log(res)


// const numbers = [8,4,6,9,2,7,5,0,];

// const res = numbers.filter(numbers > 5);

// console.log(res)


// filter() is method that works on arrays
// 
// Returns the elements of an array that meet the condition
// specified in a callback function


// Arrow function
filter((element) => { /* ... */} );
filter((element, index) => { /* ... */} );
filter((element, index, array) => { /* ... */});

// Callback function
filter(callbackFn);
filter(callbackFn, thisArg);

// Inline callback function
filter(function(element))