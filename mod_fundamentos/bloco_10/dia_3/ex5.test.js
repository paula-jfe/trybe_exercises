let getUpperCased = (word) => {
  return word.toUpperCase();
}
/* console.log(getUpperCased('trybe')); */

let getFirstLetter = (word) => {
  return word.charAt(0);
}

let concatWords = (wordA , wordB) => {
  return `${wordA} ${wordB}`
}
describe('modificando implementações', () => {
  test('deve retornar a string em caixa baixa', () => {
    getUpperCased = jest.fn().mockImplementation(word => word.toLowerCase());
    
    expect(getUpperCased('TRYBE')).toBe('trybe');
    expect(getUpperCased).toHaveBeenCalled();
    expect(getUpperCased).toHaveBeenCalledTimes(1);
    expect(getUpperCased).toHaveBeenCalledWith('TRYBE');
    
    getUpperCased.mockRestore();
    
    expect(getUpperCased('trybe')).toBe('TRYBE');
  })
})
