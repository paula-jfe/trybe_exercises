/* Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15. */

function array(numero) {
    let arrayNumeros = [];
    let soma = 0;
    for (let i = 1; i <= numero; i += 1) {
        arrayNumeros.push(i);
    }
    for (let j = 0; j < numero; j += 1) {
        soma = soma + arrayNumeros[j];
    }
    return soma;
}

console.log(array(6));