/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6. */

function retornoMenor(inteiros) {
    let posicao = 0;
    for (let i = 0; i < inteiros.length; i += 1) {
        if (inteiros[posicao] > inteiros[i]) {
            posicao = i;
        }        
    }
    return posicao;
}
console.log(retornoMenor([2, 4, 6, 7, 10, 0, -3])); 