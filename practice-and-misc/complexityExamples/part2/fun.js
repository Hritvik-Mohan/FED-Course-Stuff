const fun = (n) => {
    while (n > 1) {
        console.log(n);
        n /= 2;
    }
    console.log("done");
};

fun(32)