/* Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15. */


let arrayNumeros = [];

function array(numero) {
    for (let i = 1; i <= numero; i += 1) {
        arrayNumeros.push(i);
        
    }
    return arrayNumeros;
}

function somatorioN(numero) {
    let soma = 0;
    for (let j = 0; j < numero; j += 1) {
        soma = soma + arrayNumeros[j];
    }
    return soma;
}

console.log(arrayNumeros);
console.log(somatorioN(5));