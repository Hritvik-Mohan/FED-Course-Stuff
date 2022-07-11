//  Create a function in javascript to check weather the 
//  parameter passed in function is a palindrome or not 
//  and display the result in the console

function palindrome(myString) {

    let reversedString = myString.split("").reverse().join(""); // madaM

    if (myString == reversedString) {
    
        console.log(myString + " is a Palindrome");
    
    } else {
    
        console.log(myString + " is not a Palindrome");
    
    }

}

palindrome('Madam');

palindrome('Star Wars');

palindrome('2,3,4,3,2');

palindrome('7,10,7,8,9');
