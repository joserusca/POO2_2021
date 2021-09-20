var javier = (function () {
    var persona = {};

    persona.nombre = "Javier";
    persona.apellido = "Baez";
    persona.fechaNacimiento = new Date();
    persona.nombreCompleto = function() {
        return this.apellido + ", " + this.nombre + " (" + this.fechaNacimiento.toLocaleDateString() + ")";
    }
    return persona;
})();

javier.nombre = "Juan";
console.log(javier.nombreCompleto());
var juan = Object.create(javier);
juan.nombre = "Federico";
console.log(juan.nombreCompleto());


