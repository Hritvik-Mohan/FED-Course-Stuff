// Find the first element having a maximum frequency in a string “unacademy”

const checkMaxFrequency = str => {
    let maxFreq = 0;
    let maxChar;
    const obj = {};

    for (let i = 0; i < str.length; i++) {
        if(!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]] += 1;
        }
    }

    for (const char in obj) {
        if(obj[char] > maxFreq) {
            maxFreq = obj[char];
            maxChar = char;
        }
    }

    return maxChar;
}

let str = "unacademy";

console.log(`Character with the max frequency is: ${checkMaxFrequency(str)} in ${str}`);