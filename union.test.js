
const union = require("./union.js")

test("handles primitive value", () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4])
})
test("handles char value", () => {
    expect(union(["a"], ["b"])).toEqual(['a', 'b'])
})
test("handles mixed value", () => {
    expect(union([1], ["1", 1])).toEqual([1, '1'])
})
test("handles non-primitive value", () => {
    expect(union([{ a: { b: 10 } }], [{ a: { b: 20 } }])).toEqual([{ a: { b: 10 } }, { a: { b: 20 } }])
})
test("handles mixed non-primitive value", () => {
    expect(union(
            [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, 2],
            [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, "2"]
          )).toEqual([{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, 2, '2'])
})
