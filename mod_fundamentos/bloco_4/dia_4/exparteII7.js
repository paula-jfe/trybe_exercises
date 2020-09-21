/* Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false */

function verificaSeFinal(word, ending) {
    let endingInverse = word.split("").reverse().join("");
    let wordInverse = ending.split("").reverse().join("");
  
    for (let i = 0; i < endingInverse.length; i += 1) {
      if (wordInverse[i] != endingInverse[i]) {
        return false;
      } else {
        return true;
      }
    }
  }

console.log(verificaSeFinal('trybe', 'be'));
