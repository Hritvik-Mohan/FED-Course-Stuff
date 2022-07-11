/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    let total = 0;
    let max = salary[0];
    let min = salary[0];
    let arr = []

    for(let i = 0; i<salary.length; i++){
        if(salary[i]>max){
            max = salary[i]
        }
        if(salary[i]<min){
            min = salary[i];
        }
    }
    for(let i = 0; i<salary.length; i++){
        if(salary[i]!==max && salary[i]!==min){
            arr.push(salary[i]);
        }
    }
    for(let i = 0; i<arr.length; i++){
        total += arr[i];
    }

    let avg = total/arr.length;

    return avg;
};


let salary = [4000,3000,1000,2000];

console.log(average(salary))