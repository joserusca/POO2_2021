const {Persona, Empleado} = require('./Clases');

var jose = new Persona("Jose", "Rusca");
var carlos = new Empleado("Carlos", "Baez", 120000);

console.log(jose.toString());
console.log(carlos.toString());

// En el caso que deseen referenciar el modulo
// const Clases = require('./Clases');

// var jose = new Clases.Persona("Jose", "Rusca");
// var carlos = new Clases.Empleado("Carlos", "Baez", 120000);

// console.log(jose.toString());
// console.log(carlos.toString());