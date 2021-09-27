const Carrito = require("./modules/Carrito");
const ItemCarrito = require("./modules/ItemCarrito");
const Stock = require("./modules/Stock");
var carritoCompras = new Carrito();

console.log(Stock.getProducto(1));
console.log(Stock.verificarStock(Stock.getProducto(1), 100));


carritoCompras.agregarProducto(Stock.getProducto(1), 10);
carritoCompras.agregarProducto(Stock.getProducto(3), 10);
console.log(Stock.verificarStock(Stock.getProducto(1), 10));
console.log(Stock.verificarStock(Stock.getProducto(3), 10));
console.log(carritoCompras.calcularTotal());



