function Pidgeon(name) {
    this.name = name;    
}

const puedeVolar = {    
    volar: function(metros) {
        return "Volo " + metros + " metros.";  
    }
}

const puedeCantar = {
    cantar: function() {
        return "Tweet Tweet!!!!";
    }
}

var tweety = new Pidgeon("Tweety");

Object.assign(tweety, puedeVolar, puedeCantar);

console.log(tweety);
console.log(tweety.cantar());
console.log(tweety.volar(100));