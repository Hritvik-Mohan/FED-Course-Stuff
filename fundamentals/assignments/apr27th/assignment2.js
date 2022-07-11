/**
 * Item delivery needs to take place for a circle of size B. 
 * Suppose we start from the position C (given) then 
 * find the position where the Ath item will be delivered.
 * 
 * Note: Distribution of Items are performed at the adjacent 
 * positions starting from C.
 * 
 * Expected Input: Three integers A, B, C
 * 
 * Expected Output: Integer denoting the position 
 * of the delivery of the Ath item if started from position C.
 */



function solve(A, B, C) {
    return (C + A - 1) % B;
}

A = 8;
B = 5;
C = 2;
console.log(solve(A,B,C));