
const union = require("./union")
console.log(union([], [1, 2, 3]))


console.log(union([1, 2, 3], [2, 3, 4]));
// Output: [1, 2, 3, 4]

console.log(union(["a"], ["b"]));
// Output: ['a', 'b']

console.log(union([1], ["1", 1]));
// Output: [1, '1']

console.log(union([{ a: { b: 10 } }], [{ a: { b: 20 } }]));
// Output: [{ a: { b: 10 } }, { a: { b: 20 } }]

console.log(
  union(
    [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, 2],
    [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, "2"]
  )
);
// Output: [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, 2, '2']