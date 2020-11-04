const getUpperCased = {
  transform(word) {
    return word.toUpperCase();
  },
};

let getFirstLetter = (word) => {
  return word.charAt(0);
}

let concatWords = (wordA, wordB) => {
  return `${wordA} ${wordB}`
}
describe('modificando implementações', () => {
  test('deve retornar a string em caixa baixa', () => {
    const spy = jest.spyOn(getUpperCased, 'transform').mockImplementation(word => word.toLowerCase());

    expect(spy('TRYBE')).toBe('trybe');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('TRYBE');

    getUpperCased.transform.mockRestore();

    expect(getUpperCased.transform('trybe')).toBe('TRYBE');
  })
})
