const Persona = require('./Persona');
const Empleado = require('./Empleado');

var jose = new Persona("Jose", "Rusca");
var carlos = new Empleado("Carlos", "Baez", 120000);

console.log(jose.toString());
console.log(carlos.toString());