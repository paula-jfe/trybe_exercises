/* function getFactorialNumber(number) {
  let factorial = 1;
  for (let index = 2; index <= number; index += 1) {
    factorial *= index;
  }
  return factorial;
} */

const getFactorialNumber = number => {
  let factorial = 1;
  for (let index = 2; index <= number; index += 1) {
    factorial *= index;
  }
  return factorial;
}

console.log(getFactorialNumber(5));

/* Bônus recursividade */

/* F(n) = n * F(n-1) */

const getFactorialNumberR = number => number > 1 ? number * (getFactorialNumberR (number - 1)) : 1

console.log(getFactorialNumberR(5));
