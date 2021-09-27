var Stock = (function() {
    const stock = require("./data.json");
    
    verificarStock = function(producto, cantidad) {
        productoEnStock = stock.find( item => item.id == producto.id ) 
        return productoEnStock.cantidad > cantidad;
    }

    verStock = function() {        
        console.log(stock[1]);
    }

    getProducto = function(id) {
        return stock.find( item => {
            return item.id == id});
    }

    calculoTotal = function() {
        return stock.reduce( (anterior, actual) => anterior + actual.cantidad , 0 )
    }

    return {
        verificarStock: verificarStock,
        verStock: verStock,
        getProducto: getProducto,
        calculoTotal: calculoTotal,
    };
})();

module.exports = Stock;