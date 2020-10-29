const summatory = (a, b) => {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

/* 1 - Teste se o retorno de sum(4, 5) é 9 */
/* assert.strictEqual(sum(4, 5), 9); */
test('4 plus 5 equals 9', () => {
  expect((summatory(4, 5)).toEqual(9))
})

/* 2 - Teste se o retorno de sum(0, 0) é 0 */
/* assert.strictEqual(sum(0, 0), 0); */
test('0 plus 0 equals 0', () => {
  expect((summatory(0, 0)).toEqual(0))
})

/* 3 - Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5) */
/* 4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */
/* assert.strictEqual(sum(4, "5"), 9); */
/* test('test error when get a string insted of a number', () => {
  expect((summatory(4, "5")).toThrow('parameters must be numbers'))
}) */
