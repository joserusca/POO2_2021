var stock = {};
stock.lista = [ {nombre: 'Super', litros: 100}, {nombre: 'Regular', litros: 80}, {nombre: 'Diesel', litros: 500} ];

stock.obtenerCombustible = function(value) {
    return stock.lista.find( item => item.nombre == value);
}

stock.lista.forEach( (item, idx) => console.log(idx + " - " + item.nombre) );

var juan = stock.obtenerCombustible("Diesel");
console.log(juan);
juan.litros = 450;

console.log(stock.lista);



