let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}

console.log(minNumber);

/* Baby Steps:

Utilizando for (loop), descubra qual o menor valor (nova variável) contido no array e imprima-o (console.log).
1 - Adicionar o array;
2 - Criar uma variável com valor 0 para armazenar o resultado;
3 - Criar um loop que percorre o array;
4 - Criar um if que verifica se a posição do array é menor que a nova variável;
5 - Caso a varíavel obedeça a condição;
    Nova variável assume o valor da posição do array;
6 - Imprimir menor valor do array.

Eu resolvi o problema? Sim.
Havia outras maneiras de resolver o problema? Acredito que não. 
A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos? Sim, acredito que não. 
Seria possível inverter ou retirar algum passo? Não.
Se eu fosse um computador, conseguiria entender todas as intruções? Sim.

*/