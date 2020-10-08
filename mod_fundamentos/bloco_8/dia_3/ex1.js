const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


/* function flatten() {
  const arrayInside = arrays.flat();
  return arrayInside;
} */

function flatten() {
  return arrays.reduce((accumulator, nextValue) => {
    nextValue.map(arrayConcat => accumulator.push(arrayConcat));
    return accumulator;
  }, []); 
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);