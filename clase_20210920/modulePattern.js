var contador = (function(){
    var counter = 0;

    function increment() {
        return counter++;
    }

    function decrement() {
        return counter--;
    }

    function reset() {
        console.log("Counter " + counter + " antes de resetear.");
        counter = 0;
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
})();

var contadorA = contador;
var contadorB = contador;
contadorA.increment();
contadorB.increment();
contadorB.increment();
contadorB.increment();
contadorA.increment();
contadorA.reset();
contadorB.reset();

