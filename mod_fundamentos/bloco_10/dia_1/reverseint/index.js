// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const stringNumber = Math.abs(n).toString().split('');
  const reversedNumber = stringNumber.reverse().join('');
  const signal = Math.sign(n);
  return reversedNumber * signal;
}

module.exports = reverseInt;
