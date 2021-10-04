const sum = require("./sum");

test("2 + 3 es igual a 5", () => {
    expect(sum(2,3)).toBe(5)
})

test("5 + 3 es igual a 8", () => {
    expect(sum(5,3)).toBe(8)
})

test("5 + 4 es igual a 9", () => {
    expect(sum(5,4)).toBe(9)
})