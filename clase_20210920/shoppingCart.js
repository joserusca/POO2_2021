var shoppingCart = (function() {
    var cart = [];

    function addItem(item) {
        cart.push(item);
    }

    function checkOut() {
        var total = 0;
        cart.forEach( item => 
            total = total + item.precio
        )
        return total;
    }

    return {
        addItem: addItem,
        checkOut: checkOut
    }

})();

shoppingCart.addItem({nombre:"Jamon", precio: 123});
shoppingCart.addItem({nombre:"Queso", precio: 234});
shoppingCart.addItem({nombre:"Cantimpalo", precio: 456});

console.log(shoppingCart.checkOut());