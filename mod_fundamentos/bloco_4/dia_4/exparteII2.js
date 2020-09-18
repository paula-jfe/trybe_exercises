/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

 function retornoMaior(inteiros) {
    let posicao = 0;
    for (let i = 0; i < inteiros.length; i += 1) {
        if (inteiros[posicao] < inteiros[i]) {
            posicao = i;
        }        
    }
    return posicao;
}
console.log(retornoMaior([2, 3, 6, 7, 10, 1])); 