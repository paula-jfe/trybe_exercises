const getChange = (payable, paid) => {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  let remaining = paid - payable;
  if (remaining > 0) {
    for (let index = 0; index < coins.length; index += 1) {
      if (coins[index] <= remaining && coins[index - 1] != remaining) {
        change.push(coins[index]);
        remaining -= coins[index];
      } else if (coins[index] <= remaining && coins[index - 1] === remaining) {
        change.push(coins[index - 1]);
        remaining -= coins[index - 1];
      }
    }
  } else {
    throw new Error('paid value is not enough');
  }
  return change;
}

const assert = require('assert');

let result = getChange(1, 1);
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300);
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600);
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400);
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);

/* Critérios de aceite
Uma chamada bem-sucedida de uma função getChange deve retornar uma lista com o valor das moedas que serão devolvidas à pessoa
Essa lista deve estar no formato decrescente de valor
É permitida a repetição do valor de moedas, por exemplo, [200, 100, 50, 20, 10, 2, 2]
Um erro com a mensagem paid value is not enough deve ser lançado se o valor pago for menor que o valor da compra */
