// Program to demonstrate Object destructing in nested objects

const movie = {
    name: 'Spiderman',
    genere: 'action',
    theatres: {
        imax: 'chinnai',
        pvr: 'mumbai'
    },
    collection: '100cr',
    hit: function () {
        return `${name}, is hit`;
    },
    flop: function () {
        return `${name}, is flop`;
    }
};

// const { name, hit, theatres } = movie;
const { genere, collection } = movie;
console.log(genere);

// console.log(hit());

// const { imax, pvr } = theatres;
// console.log("theaters location are", imax, 'and', pvr); 