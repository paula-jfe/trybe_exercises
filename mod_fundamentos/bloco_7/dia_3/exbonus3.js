const assert = require('assert');

/* 3 - Escreva a função removeMiddle para passar nos testes já implementados. */

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];

const removeMiddle = (arrayOfWords) => {
  const getMiddle = (Math.round(arrayOfWords.length / 2)) - 1;
  const newArray = [];
  const removedPosition = [];
  for (let index = 0; index < arrayOfWords.length; index += 1) {
    if (index !== getMiddle) {
      newArray.push(arrayOfWords[index])
    } else {
      removedPosition.push(arrayOfWords[getMiddle]);
    }
  }
  Object.assign(arrayOfWords, newArray);
  arrayOfWords.pop();
  return removedPosition;
}

const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const output = removeMiddle(words);
const expectedOutput = ['queen'];
assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
