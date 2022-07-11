// shuffle an array

function shuffle(arr) {
    for (var i = array.length - 1; i > 0; i--) {
   
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
  }

  return arr;
}

let arr = [[1,2,3,4,5]]

console.log(arr(arr));






// WAP to find the nth largest number