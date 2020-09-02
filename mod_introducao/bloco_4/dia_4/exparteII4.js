/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda. */

function maisCaracteres(nomes) {
    let nomeAChecar = nomes[0];
    for (let i = 0; i < nomes.length; i += 1) {
        if (nomes[i].length > nomeAChecar.length) {
            nomeAChecar = nomes[i]
        } else {
            nomeAChecar = nomeAChecar;
        }
    } 
    return nomeAChecar;
}



console.log(maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));