/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2. */

function repete(inteiros) {
    let contNumRepetido = 0;
    let numRepetido = 0;
    let contNum = 0;
    for (let i = 0; i < inteiros.length; i += 1) {
        let maisRepete = inteiros[i];
        for (let j = 0; j < inteiros.length; j += 1) {
            if (maisRepete === inteiros[i]) {    
                contNum = contNum + 1;
            }               
        }
        if (contNum > contNumRepetido) {
            contNumRepetido = contNum;
            numRepetido = i;
        }
        contNum = 0;
    }
    return inteiros[numRepetido];
}
    
 

 console.log(repete([2, 3, 2, 5, 8, 2, 3]));