function sort(arr, n){
    if(n<=1){
        return;
    }
    sort(arr, n-1);
    let last = arr[n-1];
    let j = n - 2;
    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = last;
}
let arr = [5, 2, 64, 1, 8, 10];
sort(arr, arr.length);
console.log(arr);