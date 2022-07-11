const users = [{
        firstName: "hritvik",
        lastName: "mohan",
        age: 21
    },
    {
        firstName: "donald",
        listName: "trump",
        age: 75
    },
    {
        firstName: "elon",
        lastName: "musk",
        age: 50
    },
    {
        firstName: "priyanka",
        lastName: "chopra",
        age: 26
    }
];

// list of full names
// ["hritvik mohan", "donald trump" ...]

// const output = users.map(x => x.firstName +" "+ x.lastName);

const output = users.reduce(function (acc, curr) {
    
    if (acc[curr.age]) {
    
        acc[curr.age] = ++acc[curr.age];
    
    } else {
    
        acc[curr.age] = 1
    
    }
    
    return acc

}, {});

console.table(output)

const output2 = users.filter(x => x.age<30).map(x => x.firstName);

console.table(output2)

function occurrence(users) {
    
    let obj = {}
    
    for (let i = 0; i < users.length; i++) {
        
        if (obj[users[i].age]) {
        
            obj[users[i].age] += 1;
        
        } else {
        
            obj[users[i].age] = 1;
        
        }
    
    }
    
    return obj

}

console.table(occurrence(users))




function occNum(input) {
    
    let obj = {}
    
    for (let i = 0; i < input.length; i++) {
        
        if (obj[input[i]]) {
        
            obj[input[i]] += 1
        
        } else {
        
            obj[input[i]] = 1;
        
        }
    
    }

    for (let i in obj) {
        
        // if (obj[i] == 2) {
        
            console.log(`${i} is occuring ${obj[i]} times`)
        
        // }
    
    }
    
    return obj

}

console.table(occNum([7,2,8,4,6,1,9,3,8,4,6,3,9,2,6,2]))