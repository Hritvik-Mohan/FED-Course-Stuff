let greaterValue = (x, y, z) => {

    let maxValue;

    if(x>y && x>z){
        maxValue = x;
    } else if(y>x && y>z){
        maxValue = y;
    } else{
        maxValue = z;
    }
    return maxValue;
}

const x = 22, y = 9, z = 27;
let maxVal = greaterValue(x, y, z);
console.log(`${maxVal} is the maximum value out of ${x} and ${y}`)



// x>y ? console.log(`${x} is greater than ${y}`) : console.log(`${y} is greater than ${x}`);