/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 let countOdds = function(low, high) {
    let count = [];
    for(let i = low; i<=high; i++){
        if(low%2!=0){
            count++;
        }
    }
    return count;
};

countOdds