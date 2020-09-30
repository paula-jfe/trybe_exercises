const assert = require('assert');

/* Escreva a função addOne para passar nos testes já implementados. */

const addOne = (functionObject) => {
  let newMemoryArray = [];
  for (let index = 0; index < functionObject.length; index += 1) {
    newMemoryArray.push(functionObject[index] + 1);
  }
  return newMemoryArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
