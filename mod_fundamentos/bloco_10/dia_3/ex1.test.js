let randomNumber = () => {
  return Math.floor(Math.random() *101);
}

test('função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
})
