const ItemCarrito = require("./ItemCarrito");

function Carrito() {
    if(!(this instanceof Carrito))
        return new Carrito();

    var productos= [];

    this.agregarProducto = function(producto, cantidad) {
        productos.push(new ItemCarrito(producto, cantidad));
    }

    this.calcularTotal = function() {
        var total = 0;
        productos.forEach( item => {
            console.log(item);
            total += item.producto.precio * item.cantidad }) 
        return total;
    }
}

module.exports = Carrito;