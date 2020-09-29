/* function getlongestWord(phrase) {
  const arrayWords = phrase.split(' ');
  const initialLength = 0;
  let longestWord = '';
  for (let index = 0; index < arrayWords.length; index += 1) {
    if (arrayWords[index].length > initialLength) {
      longestWord = arrayWords[index];
    }
  }
  return longestWord;
} */

const getlongestWord = phrase => {
  const arrayWords = phrase.split(' ');
  let initialLength = 0;
  let longestWord = '';
  for (const index of arrayWords) {
    if (index.length > initialLength) {
      initialLength = index.length;
      longestWord = index;
    }
  }
  return longestWord;
}

console.log(getlongestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
