// Pass-by-value

function modify1(var1){
    var1 = 5;
}

let a = 6;
modify1(a);
console.log(a); // 6


// Pass-by-reference

function modify2(input, value){
    input.push(value);
}

let arr = ['pass'];
modify2(arr, 'by reference');
console.log(arr);