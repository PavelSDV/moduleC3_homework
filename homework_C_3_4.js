function ElTools(name, power = 110) {
    this.name = name;
    this.power = power;
}

ElTools.prototype.getPlug = function(on_off){
    if (on_off == 'on') {
        console.log(`Прибор - ${this.name}, состояние - ${on_off}`); }
    else if (on_off == 'off') {
        console.log(`Прибор - ${this.name}, состояние - ${on_off}`); }
    else {
        console.log('Состояние прибора не известно'); }
}

function Computer(name, brend) {
    this.name = name;
    this.brend = brend;
    this.getPower = function(I, U) {
        return I * U;
    }
}

function Lamp(name, brend) {
    this.name = name;
    this.brend = brend;
    this.getPower = function(I, U) {
        return I * U;
    }
}

Computer.prototype = new ElTools();
Lamp.prototype = new ElTools();

const computers =  new Computer('computer','IBM');
const lamps =  new Lamp('lamp', 'Svet');

console.log(computers.getPower(2, 220));
console.log(lamps.getPower(2, 220));

console.log(computers.power);
console.log(lamps.power);

console.log(computers);
console.log(lamps);

computers.getPlug('on');
lamps.getPlug('off');