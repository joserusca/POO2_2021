function Empleado(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function EmpleadoAsalariado(nombre, apellido, salario) {
    Empleado.call(nombre, apellido);
    this.salario = salario;

    this.calcularSueldo = function(){
        return this.salario;
    }
}

function EmpleadoXComision(nombre, apellido, totalVentas, comision) {
    Empleado.call(nombre, apellido);
    this.totalVentas = totalVentas;
    this.comision = comision;

    this.calcularSueldo = function(){
        return this.totalVentas * this.comision;
    }
}

console.log([
    new EmpleadoAsalariado("Juan", "Fernandez", 12000), 
    new EmpleadoXComision("Pedro", "Garcia", 2400000, 0.20)        
].map( empleado => empleado.calcularSueldo()));