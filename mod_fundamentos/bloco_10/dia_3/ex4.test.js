let getUpperCased = (word) => {
  return word.toUpperCase();
}

let getFirstLetter = (word) => {
  return word.charAt(0);
}

let concatWords = (wordA , wordB) => {
  return `${wordA} ${wordB}`
}

describe('modificando implementações', () => {
  test('deve retornar a string em caixa baixa', () => {
    getUpperCased = jest.fn().mockImplementationOnce(word => word.toLowerCase());

    expect(getUpperCased('TRYBE')).toBe('trybe');
    expect(getUpperCased).toHaveBeenCalled();
    expect(getUpperCased).toHaveBeenCalledTimes(1);
    expect(getUpperCased).toHaveBeenCalledWith('TRYBE');  
  })

  test('retornar a última letra de uma string', () => {
    getFirstLetter = jest.fn().mockImplementationOnce(word => word.substr(-1));
    
    expect(getFirstLetter('Hamburguer')).toBe('r');
    expect(getFirstLetter).toHaveBeenCalled();
    expect(getFirstLetter).toHaveBeenCalledTimes(1);
    expect(getFirstLetter).toHaveBeenCalledWith('Hamburguer');
  })

  test('receber três strings e concatená-las', () => {
    concatWords = jest.fn().mockImplementationOnce((wordA, wordB, wordC) => {
      return `${wordA} ${wordB} ${wordC}`;
    });
    
    expect(concatWords('Eu', 'amo', 'programar')).toBe('Eu amo programar');
    expect(concatWords).toHaveBeenCalled();
    expect(concatWords).toHaveBeenCalledTimes(1);
    expect(concatWords).toHaveBeenCalledWith('Eu', 'amo', 'programar');
  })
})
