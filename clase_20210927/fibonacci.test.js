const getFibonacci = require("./fibonacci.js");

test("Debe retornar 0 como el primer numero de Fibonacci", () => {
    expect(getFibonacci(1)).toBe(0);
})

test("Debe retornar 1 como el segundo numero de Fibonacci", () => {
    expect(getFibonacci(2)).toBe(1);
})

test("Debe retornar 1 como el tercer numero de Fibonacci", () => {
    expect(getFibonacci(3)).toBe(1);
})

test("Debe retornar 2 como el cuarto numero de Fibonacci", () => {
    expect(getFibonacci(4)).toBe(2);
})

test("Debe retornar 3 como el quinto numero de Fibonacci", () => {
    expect(getFibonacci(5)).toBe(3);
})

test("Debe retornar 13 como el octavo numero de Fibonacci", () => {
    expect(getFibonacci(8)).toBe(13);
})

test("Debe retornar 55 como el 11 numero de Fibonacci", () => {
    expect(getFibonacci(11)).toBe(55);
})

test("Debe lanzar un error si el numero es 0", ()=> {
    expect(() => getFibonacci(0)).toThrowError("n no puede ser cero o un numero negativo");
})

test("Debe lanzar un error si el numero es negativo", () => {
    expect(() => getFibonacci(-3)).toThrowError("n no puede ser cero o un numero negativo");
})