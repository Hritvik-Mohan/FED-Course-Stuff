let grades = [{
    "name": 'Jack',
    "grades": 8,
    "sex": 'M'
},
{
    "name": 'Tyler',
    "grades": 9,
    "sex": 'M'
},
{
    "name": 'Durden',
    "grades": 10,
    "sex": 'M'
},
{
    "name": 'David',
    "grades": 11,
    "sex": 'M'
},
{
    "name": 'Fincher',
    "grades": 12,
    "sex": 'M'
},
{
    "name": 'Martha',
    "grades": 8,
    "sex": 'F'
},
{
    "name": 'Hannah',
    "grades": 9,
    "sex": 'F'
},
{
    "name": 'Regina',
    "grades": 10,
    "sex": 'F'
},
{
    "name": 'Claudia',
    "grades": 11,
    "sex": 'F'
},
{
    "name": 'Agnes',
    "grades": 12,
    "sex": 'F'
},
];

let isBoy = student => student.sex === 'M';
let isGirl =  student => student.sex === 'F';

let getBoys = grades => (
    grades.filter(isBoy)
)

let getGirls = grades => (
    grades.filter(isGirl)
)

let average = grades => (
    grades.reduce((acc, curr) => (
        acc + curr.grades
    ), 0) /grades.length
)

let maxGrade = grades => (
    Math.max(...grades.map(student => student.grades))
)

let minGrade = grades => (
    Math.min(...grades.map(student => student.grades))
)

console.log(average(grades));
console.log(average(getBoys(grades)));
console.log(average(getGirls(grades)));
console.log(maxGrade(grades));
console.log(minGrade(grades));