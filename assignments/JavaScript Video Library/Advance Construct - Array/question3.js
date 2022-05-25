/*

Q.  Given a string 'S' and a pair of multiple queries. Let the query pair be (L, R). 
    So this pair (L, R) will correspond to substring S[L..R]. 
    You need to determine if such a pair corresponds to substring S[L..R]. 
    You need to determine if such pair corresponds to a palindrome substring or not.
    
    Input:
    
    abaaabaaaba, [0,10],
    
    abaaabaaaba, [5,8],
    
    abaaabaaaba, [2,5]
    
    Output:
    
    "The substring is a palindrome", 0, 10
    
    "The substring is not a palindrome", 5, 8
    
    "The substring is not a palindrome", 2, 5

*/

// Approach: 1
let substringPalindrome = (str, l, r) => {
    str = str.slice(l, r); // this will return you the substring

    if(str == str.split("").reverse().join("")){
        console.log("Palindrome");
    } else {
        console.log("Not a palindrome");
    }
}




// Approach: 2
let substringPalindrome1 = (str, l, r) => {
    str = str.slice();
    let j = str.length - 1;
    for(let i = 0; i<j/2; i++){
        // forward character - str[i] backward character str[j]
        if(str[i] != str[j-i]){
            console.log("Not a palindrome.")
            break;
        }
    }
    console.log("Palindrome")
}


let str = "aaabbaaa";

substringPalindrome(str, 1, 4);
substringPalindrome(str, 2, 6);

substringPalindrome1(str, 1, 4);
substringPalindrome1(str, 2, 6);