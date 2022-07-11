let isPalindrome = function (x) {
    let rem;
    let temp = x;
    let rev = 0;

    while (x > 0) {
        rem = x % 10;
        rev = (rev * 10) + rem;

        x = parseInt(x / 10);
    }

    if (rev == temp)
        return true;
    else
        return false
};

console.log(isPalindrome(121));


/**
 * rem - 1
 * x - 12
 * rev - 1
 * 
 * rem - 2
 * x - 1
 * rev - 12
 * 
 * rem - 1
 * x - 0
 * rev - 121
 */