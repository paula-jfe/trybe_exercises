/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

let inteiros = [2, 3, 6, 7, 10, 1];
let posicao = 0;

function retornoMaior(inteiros) {
    for (let i = 0; i < inteiros.length; i += 1) {
        if (posicao < inteiros[i]) {
            posicao = inteiros[i];
        } else {
            posicao = posicao;
        }

        
    }
    
}
console.log(posicao);


/* for (let i = 0; i < numbers.length; i += 1) {
    if (maxNumber < numbers[i]) {
        maxNumber = numbers[i]
    } else {
        maxNumber = maxNumber;
    }
} */