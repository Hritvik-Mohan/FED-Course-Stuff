function firstNonrepeatingCharacter(str){
    let map = {};

    for(let i=0; i < str.length; i++) {
        if(!map[str[i]]) {
            map[str[i]] = 1;
        } else {
            map[str[i]] += 1;
        }
    }

    for(let i=0; i < str.length; i++) {
        if(map[str[i]] == 1) return str[i];
    }

    return -1
}

// console.log(firstNonrepeatingCharacter('levvel'))
