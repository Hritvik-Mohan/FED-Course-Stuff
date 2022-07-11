function merge(arr1, arr2, result) {
    let n = arr1.length;
    let m = arr2.length;

    let chintu = 0, mintu = 0;

    while(chintu < m && mintu < n){
        if(arr1[chintu] <= arr2[mintu]){
            result.push(arr1[chintu]);
            chintu++;
        } else {
            result.push(arr2[mintu]);
            mintu++;
        }
    }

    while(chintu < m) {
        result.push(arr1[chintu]);
        chintu++;
    }

    while(mintu < n) {
        result.push(arr2[mintu]);
        mintu++;
    }

}

let arr1 = [];
let arr2 = [2, 8, 9, 12, 15, 17, 18, 20];
let result = [];
merge(arr1, arr2, result);

console.log(result);

