const assert = require('assert');

/* Escreva a função addAllnumbers para passar nos testes já implementados. */
const addAllnumbers = (sumNumbers) => {
  let newSum = 0;
  for (let index in sumNumbers) {
    newSum += sumNumbers[index];
  }
  /* for (let index = 0; index < sumNumbers.length; index += 1) {
    newSum += sumNumbers[index];
  } */
  return newSum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);