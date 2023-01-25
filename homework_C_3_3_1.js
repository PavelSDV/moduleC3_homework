function car(obj) {

    for (let prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}

const carSpecifications = {
    speed: 180,
    power: 150,
    weight: 1000,
    transmission: 'automatic'
}

car(carSpecifications);