const Persona = require('./Persona');

class Empleado extends Persona {
    constructor(nombre, apellido, sueldo) {
        super(nombre, apellido)
        this.sueldo = sueldo;
    }
    toString() {
        return super.toString() + " (" + this.sueldo + ")";
    }
}

module.exports = Empleado;