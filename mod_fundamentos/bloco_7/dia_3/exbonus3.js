const assert = require('assert');

/* Escreva a função removeMiddle para passar nos testes já implementados. */

const removeMiddle = (arrayOfWords) => {
  const getMiddle = (Math.round(arrayOfWords.length / 2)) - 1;
  const newArray = [];
  for (let index = 0; index < arrayOfWords.length; index += 1) {
    if (index !== getMiddle) {
      newArray.push(arrayOfWords[index]);
    }
  }
  return newArray;
}

/* const removeMiddle = (arrayOfWords) => {
  const getMiddle = Math.round((arrayOfWords.length / 2) - 1);
  const newArray = arrayOfWords.splice(getMiddle, 1);
  return arrayOfWords;
} */

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const output = removeMiddle(words);
const expectedOutput = ['queen'];

/* const getMiddle = (Math.round(words.length / 2)) - 1;
const jumpedWord = [];
jumpedWord.push(words[getMiddle]);
console.log(jumpedWord); */

assert.deepStrictEqual(output, expectedOutput);
/* assert.deepStrictEqual(words, expectedWords); */
