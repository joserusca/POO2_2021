function NullBird() {
    this.sound = function() {
        return "Silence.";
    }
}

function puedeVolar() {    
    this.volar = function(metros) {
        return "Volo " + metros + " metros.";  
    }
}

function Pidgeon() {
    var pVolar = new puedeVolar();
    
    this.sound = function() {
        return "Tweet Tweet!!!!";
    }

    this.volar = function(metros) {        
        return pVolar.volar(metros);
    }
}

function getBird(type) {
    return type === "Pidgeon" ? new Pidgeon(): new NullBird();
}

// console.log([ "Pidgeon", null ].map( item => getBird(item).sound()));
var juan = getBird("Pidgeon");

console.log(juan.volar(10));