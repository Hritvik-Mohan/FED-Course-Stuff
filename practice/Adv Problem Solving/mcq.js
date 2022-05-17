//  1. Output of the following script

// let result = 0;
// for (let i = 0; i < 5; i++){
//     result += i;
//     console.log(result);
// }

//  result = 0, i = 0, i++
//  result = result + i = 0

//  result = 0, i = 1, i++
//  result = result + i = 1

//  result = 1, i = 2, i++
//  result = result + i = 3

//  result = 3, i = 3, i++
//  result = result + i = 6

//  result = 6, i = 4, i++
//  result = result + i = 10

//  Answer: (a) 10


//  2. Out of the following script

let num = 16; // 16 8 4 2 1 -> 10000
console.log(num<<3); // 10000_ _ _ -> 10000000 -> (128) 64 32 16 8 4 2 1  

//  Answer: (d) 128

//  3.  Which of the operators gives 1 when neither of the digits are the same.

//  Answer: XOR ->  it will return 1 (only) when neither of the digits are the same,
//                  not OR because if we pass two same values then also it'll also return 1

//  4.  6th element of the fibonacci series is?

//  1   2   3   4   5   (6)   7   8   9   10  11  12  13  14  15  16
//  0   1   1   2   3   (5)   8   13  34  55  89  144 233 377 610 987

//  Answer: (a) 5

//  5.  How to get the last 3 digits of number A

//  a)  A%10        -   last 1 digit
//  b)  A%100       -   last 2 digits
//  c)  A%1000      -   last 3 digits
//  d)  A%10000     -   last 4 digits

// Answer:  (c) A%1000
