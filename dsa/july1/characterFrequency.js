/**
 * Given a string print the frequency of each charater in the string.
 */

function characterFrequncy(str){
    let map = {};

    for(let i=0; i < str.length; i++) {
        if(!map[str[i]]) {
            map[str[i]] = 1;
        } else {
            map[str[i]] += 1;
        }
    }

    return map;
}

// console.log(characterFrequncy('relevel));

