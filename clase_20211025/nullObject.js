function NullBird() {
    this.sound = function() {
        return "Silence.";
    }
}

function Pidgeon() {
    this.sound = function() {
        return "Tweet Tweet!!!!";
    }
}

function getBird(type) {
    return type === "Pidgeon" ? new Pidgeon(): null;
}

console.log([ "Pidgeon", null ].map( item => getBird(item).sound()));