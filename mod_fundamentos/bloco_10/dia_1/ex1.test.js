function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

/* 1 - Teste se o retorno de sum(4, 5) é 9 */
test('4 plus 5 equals 9', () => {
  expect(sum(4, 5)).toBe(9);
});

/* 2 - Teste se o retorno de sum(0, 0) é 0 */
test('0 plus 0 equals 0', () => {
  expect(sum(0, 0)).toBe(0);
});

/* 3 - Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5) */
test('throw new error', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow();
});

/* 4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */
test('parameters must be numbers error', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow('parameters must be numbers');
});

/* Modo diferente de testar se a função exibe a mensagem de erro */
test('parameters must be numbers error', () => {
  expect(sum).toThrow('parameters must be numbers');
});
