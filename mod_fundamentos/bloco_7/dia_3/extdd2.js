const assert = require('assert');

/* 2 - Escreva a função wordLengths para passar nos testes já implementados. */

const wordLengths = (outputWords) => {
  const newArrayOfWords = [];
  for (let index = 0; index < outputWords.length; index += 1) {
    newArrayOfWords.push(outputWords[index].length);
  }
  return newArrayOfWords;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);