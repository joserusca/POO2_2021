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

module.exports = Persona;