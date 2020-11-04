function myRemove(array, item) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (item !== array[i]) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

/* 1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado */
test('[1, 2, 3, 4], 3 become [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

/* 2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4] */
test('[1, 2, 3, 4], 3 does not become [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

/* 3 - Verifique se o array passado por parâmetro não sofreu alterações */
test('Array does not change', () => {
  expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

/* 4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */
test('[1, 2, 3, 4], 5 become [1, 2, 3, 4], number 5 is not in the array', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});
