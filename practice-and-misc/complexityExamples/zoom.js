const zoom = n => {
    if (n === 0) {
        console.log('liftoff!');
        return;
    }

    console.log(n);
    zoom(n - 1);
}

zoom(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// liftoff!

// it's a linear chain
// we're just going to have a number of recursive calls
// that is equal to my original number argument n

// so, if I call zoom with 10 at the every start
// we're gonna have about 10 recursive calls 
// that would actually be my time complexity

// Time Complexity: O(n)
// Space Complexity: O(n)

// where n is the input number