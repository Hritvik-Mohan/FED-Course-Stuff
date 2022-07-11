let showroom = {
    "cars": [{
            "brand": "BMW",
            "model": "X1",
            "price": 1.5,
            "colour": "white"
        },
        {
            "brand": "BMW",
            "model": "X2",
            "price": 2.5,
            "colour": "black"
        },
        {
            "brand": "Audi",
            "model": "C1",
            "price": 3,
            "colour": "grey"
        },
        {
            "brand": "BMW",
            "model": "C2",
            "price": 3.5,
            "colour": "blue"
        },
    ]
};
let expensiveCar = showroom.cars[0].price;
let expCarDetails;
for (let i = 0; i < showroom.cars.length; i++) {
    if (expensiveCar < showroom.cars[i].price) {
        expensiveCar = showroom.cars[i].price;
        expCarDetails = showroom.cars[i];
    }
}
console.log(expCarDetails)