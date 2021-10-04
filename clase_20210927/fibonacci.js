function getFibonacci(n) {
    if(n<=0)
        throw new Error("n no puede ser cero o un numero negativo");
    if(n>2)        
        return getFibonacci(n-1) + getFibonacci(n-2);
    else
        return n-1;
}

module.exports = getFibonacci;