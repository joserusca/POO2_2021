class Persona {
    constructor(nombre, apellido)
    {
     this.nombre = nombre;
     this.apellido = apellido;   
    }

    toString() {
        return this.apellido + ", " + this.nombre;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, sueldo) {
        super(nombre, apellido)
        this.sueldo = sueldo;
    }
    toString() {
        return super.toString() + " (" + this.sueldo + ")";
    }
}

module.exports = {Persona, Empleado};