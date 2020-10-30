// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
  const strArray = str.toLowerCase().split('');
  let summatory = 0;
  for (let i = 0; i < strArray.length; i += 1) {
    for (let j = 0; j < arrayOfVowels.length; j += 1) {
      if (strArray[i] === arrayOfVowels[j]) {
        summatory += 1;
      }
    }
  }
  return summatory;
}

module.exports = vowels;
