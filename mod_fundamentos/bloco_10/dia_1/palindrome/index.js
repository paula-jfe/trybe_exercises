// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const word = str;
  const reverseWord = word.split('').reverse().join('');
  console.log(reverseWord);
  return word === reverseWord;
}

module.exports = palindrome;
