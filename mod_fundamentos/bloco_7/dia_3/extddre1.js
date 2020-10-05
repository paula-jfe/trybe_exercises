/* 1 - Use a variável parameter como parâmetro da função abaixo, 
escreva testes para verificar se a mesma está retornando 
como se vê na variável result e, caso não esteja, 
altere o código para que ele passe nos testes.
 */

const assert = require('assert');
const greetPeople = (parameterFound) => {
  let greeting = 'Hello';
  for (const person in parameterFound) {
    parameterFound[person] = `${greeting} ${parameterFound[person]}`;
  }
  return parameterFound;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.deepStrictEqual(greetPeople(parameter), result);
