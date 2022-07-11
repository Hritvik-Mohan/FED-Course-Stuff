// Requirements: 1. Write code for creating a new sorted array 
//                  from two sorted arrays in O(n+m) time complexity 
//                  where n,m are the size of the unsorted arrays.


function newArray(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

console.log(newArray(arr1, arr2));



// Solution

// function combine(inp_arr1,  inp_arr2 , n1 , n2,  inp_arr3) {
//     var i = 0, j = 0, k = 0;

//     while (i < n1 && j < n2) {
//         if (inp_arr1[i] < inp_arr2[j])
//             inp_arr3[k++] =inp_arr1[i++];
//         else
//             inp_arr3[k++] = inp_arr2[j++];
//     }

//     while (i < n1)
//         inp_arr3[k++] = inp_arr1[i++];

//     while (j < n2)
//         inp_arr3[k++] = inp_arr2[j++];
// }

 
//     var inp_arr1 = [ 10,12,14,16 ];
//     var n1 = inp_arr1.length;

//     var inp_arr2 = [ 11,13,15,17 ];
//     var n2 = inp_arr2.length;

//     var inp_arr3 = Array(n1 + n2).fill(0);

//     combine(inp_arr1, inp_arr2, n1, n2, inp_arr3);
//              for (i = 0; i < n1 + n2; i++)
//         console.log(inp_arr3[i]);
