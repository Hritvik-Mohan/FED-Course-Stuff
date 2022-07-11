const readline = require("readline");
const { r } = require("tar");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name?", function(input){
    console.log(`oh, so your name is ${name}`);
    console.log();
    rl.close();
});

function input(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

let nested = input(2)(3)(5);

console.l



