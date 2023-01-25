function car(obj, str) {
    if (str in obj) {
        return true;
    } else {
        return false;
    }
}

const carSpecifications = {
    speed: 180,
    power: 150,
    weight: 1000,
    transmission: 'automatic'
}

const specification = 'power';

console.log(car(carSpecifications, specification));

