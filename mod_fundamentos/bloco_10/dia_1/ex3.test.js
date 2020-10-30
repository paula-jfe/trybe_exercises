function myRemoveWithoutCopy(array, item) {
  for (let i = 0, len = array.length; i < len; i += 1) {
    if (array[i] === item) {
      array.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return array;
}

/* 1 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado */
test('[1, 2, 3, 4], 3 become [1, 2, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

/* 2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4] */
test('[1, 2, 3, 4], 3 does not become [1, 2, 3, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

/* 3 - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações */
test('Array does not change', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

/* 4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado */
test('[1, 2, 3, 4], 5 become [1, 2, 3, 4], number 5 is not in the array', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});