const calculateAverage = numbers => {
    let sum = 0; // they execute exactly once

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        sum += number;
    }

    return sum / numbers.length; // they execute exactly once
} 

console.log(calculateAverage([2, 3, 4, 1])); // 2.5

// n length or the size of the input array
// line 2 and 9 executes exactly once or in general they happen a constant number of times.
// if these line only execute constant number of times then if actually won't affect my analysis and I can basically ignore them
// then in course we should turn our attention to for loop
// this for loop will contribute basically the entire time complexity
// for (let i = 0; i < numbers.length; i++) {
// i = 0 is just the counter initialization for my for loop and only happens once at the very start of the for loop
// that is not really depend on the size of the for loop, that happens once always
// let's look at the rest of the code 
// this condition check -> i < numbers.length; that will happen on every iteration
// this increment -> i++ does happen on every iteration check
// and of course all of the code inside of the body of the for loop also happens on every iteration
// let's how far I'm going to ierate, I'm going from 0 to all the way upto the length of the numbers array
// so, the numbers of iterations of this for loop is basically exactly the size of the input
// so, I know that this for loop makes n iterations
// on a single iteration, there're about 4 things that happen in this condition -> i < numbers.length, this increment -> i++ and 
// this two lines
// let number = numbers[i];
// sum += number;
// we couldn't say that there are n times four different steps overall
// n * 4
// where n is the length of the numbers array
// however because big is really really only concerned with the size of the input which would be n in this case
// we actually get to drop this 4
// we can drop any of those multiplication of constants
// oveall something we can say that this function has a o of n runtime where n is the length of the input array
// O (n), where n is the length of the input array

 