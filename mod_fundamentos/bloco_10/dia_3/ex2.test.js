let randomNumber = () => {
  return Math.floor(Math.random() *101);
}

test('função foi chamada, qual seu retorno e quantas vezes foi chamada e quais parâmetros', () => {
  randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
  expect(randomNumber(15, 3)).toBe(5);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(15, 3);
})
