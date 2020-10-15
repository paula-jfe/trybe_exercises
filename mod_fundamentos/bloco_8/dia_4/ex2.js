const assert = require('assert');

function sum(...parameters) {
/*   let summation = 0;
  for (index of parameters) {
    summation += index;
  }
  return summation; */
  if (parameters === null) {
    return 0;
  } else {
    return parameters.reduce((acc, next) => {
      return acc + next;
    }, 0); 
  }
};

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

