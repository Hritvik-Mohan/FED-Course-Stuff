/**
 * Given two strings, write a program that detects whether they are anagram of each other or not ??
 * 
 * ex:  RACE, CARE      -> True
 *      SANKET, SAMYAK  -> False
 */

function checkAnagram(str1, str2) {
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return str1 == str2;
}

// console.log(checkAnagram('abc', 'cab'));


function checkAnagramOptimised(str1, str2) {
    // check if the length is not equal
    if(str1.length != str2.length) {
        return false;
    }

    // prepare frequency map of str1
    let mp = {}; // inside this object we will store key value pairs - KNEE
    for(let i = 0; i < str1.length; i++) {
        if(!mp[str1[i]]) {
            // if the current character is not present in the map, make entry with inital frequency
            mp[str1[i]] = 1;
        } else {
            // the charater is already present in the map
            mp[str1[i]] += 1;
        }
    }
    // checking str2 in the map
    for(let i = 0; i < str2.length; i++) {
        if(!mp[str2[i]]) {
            // this is an extra unwanted character, as it is not present in my map
            // console.log("not an anagram", mp);
            return false;
        } else {
            mp[str2[i]] -= 1;
            if(mp[str2[i]] == 0) delete mp[str2[i]];
        }
    }
    // console.log(mp);
    // check if the number of entries in the map left is 0
    return Object.entries(mp).length == 0;
}

console.log(checkAnagramOptimised("silent", "listen"));





































//  st = st.split('').sort((a,b) => a.localeCompare(b)).join('');