let arr = [1, 1, 2, 2, 2, 3, 3, 6, 6, 3, 3, 4, 4, 4, 4, 4, 9]

function occurrence(input) {

    let hm = new Map();

    for (let i = 0; i < input.length; i++) {

        if (hm.has(input[i]) == false) { // if value is not there in the hashmap

            hm.set(input[i], 1); // insert the value in the hashmap

        } else { // update the count

            let count = hm.get(input[i]);

            count++;

            hm.set(input[i], count);

        }

    }

    for (let [key, value] of hm) {

        if (value !== 1) {

            console.log(`${key} is occuring ${value} times.`);

        } else {

            console.log(`${key} is occuring ${value} time.`);

        }

    }

}

console.log(occurrence(arr));