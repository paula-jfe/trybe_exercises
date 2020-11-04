function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

/* 1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado */
test('15 is equal to fizzbuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

/* 2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado */
test('9 is equal to fizz', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});

/* 3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado */
test('50 is equal to buzz', () => {
  expect(myFizzBuzz(50)).toBe('buzz');
});

/* 4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado */
test('13 can not be divided by 3 or 5', () => {
  expect(myFizzBuzz(13)).toBe(13);
});

/* 5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */
test('The parameter is not a number', () => {
  expect(myFizzBuzz('15')).toBe(false);
});
