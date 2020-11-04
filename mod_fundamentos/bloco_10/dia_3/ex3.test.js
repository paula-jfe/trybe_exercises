let randomNumber = () => {
  return Math.floor(Math.random() *101);
}

describe ('testando implementações diferentes', () => {
  test('mockando função para receber 3 parâmetros e retornar sua multiplicação', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    expect(randomNumber(5, 10, 100)).toBe(5000);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(5, 10, 100);
  })
  
  test('mockando função que recebe um parâmetro e retorna seu dobro', () => {
    randomNumber.mockReset();
    randomNumber = jest.fn().mockImplementationOnce(a => a * 2);
    expect(randomNumber(5)).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(5);
  })
})
