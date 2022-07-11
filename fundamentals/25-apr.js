// call stack

function a() {
    b();
    console.log('a');
}

function b() {
    c();
    console.log('b');
}

function c() {
    a();
    console.log('c');
}


a();