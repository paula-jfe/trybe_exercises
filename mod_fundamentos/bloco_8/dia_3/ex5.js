    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const splitEveryWord = names.map((stringArray) => {
    return stringArray.split('');
  })
  const flatten = splitEveryWord.flat();
  const countEveryA = flatten.reduce((accumulator, currentElement) => {
    if (currentElement.toUpperCase() === 'A') {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
  return countEveryA;
}


assert.deepStrictEqual(containsA(), 20);