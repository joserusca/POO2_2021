function funcPersona(nombre, apellido, fechaNacimiento) {
    var persona = {};

    persona.nombre = nombre;
    persona.apellido = apellido;
    persona.fechaNacimiento = fechaNacimiento;
    persona.nombreCompleto = function() {
        return persona.apellido + ", " + persona.nombre + " (" + persona.fechaNacimiento.toLocaleDateString() + ")";
    }
    return persona;
}

var javier = funcPersona("Javier", "Baez", new Date());

console.log(javier);

function Persona(nombre, apellido, fechaNacimiento) {
    if( !(this instanceof Persona)) 
        return new Persona(nombre, apellido, fechaNacimiento);

    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.nombreCompleto = function() {
        return this.apellido + ", " + this.nombre + " (" + this.fechaNacimiento.toLocaleDateString() + ")";
    }
}

var juan = Persona("Juan", "Ortega", new Date());

console.log(juan);