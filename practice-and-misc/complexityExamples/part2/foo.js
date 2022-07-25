const foo = (n) => { // takes in some number argument
    let result = 0; // declares a result equales 0 variable


    // then it iterates a fix number of times
    // it only gets exactly 5 iterations out of this for loop
    for (let i = 0; i < 5; i++) {
        // and on every iteration, I add my input number into my result
        result += n;
    }
    //


    return result;
};

// they've called foo with an initial argument of 4
console.log(foo(4)); // 20

// that means that this code is going to add 4 into my result 5 times over
// which makes sense that I get the final result of 20


