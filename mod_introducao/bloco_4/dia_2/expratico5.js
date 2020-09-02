let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maxNumber = 0;


for (let i = 0; i < numbers.length; i += 1) {
    if (maxNumber < numbers[i]) {
        maxNumber = numbers[i]
    } else {
        maxNumber = maxNumber;
    }
}

console.log(maxNumber);

/* Baby Steps:

Utilizando for (loop), descubra qual o maior valor (nova variável) contido no array e imprima-o (console.log).
1 - Adicionar o array;
2 - Criar uma variável com valor 0 para armazenar o resultado;
3 - Criar um loop que percorre o array;
4 - Criar um if com a condição da nova variável ser menor que o valor do array naquela posição;
5 - Caso a varíavel obedeça a condição;
    Valor da nova variável = valor do array na posição;
6 - Caso não obedeça a condição;
    Valor da nova variável permanece igual;
7 - Imprimir o maior valor do array correspondente na nova variável.

Eu resolvi o problema? Sim.
Havia outras maneiras de resolver o problema? Acredito que não. 
A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos? Sim, acredito que não. 
Seria possível inverter ou retirar algum passo? Não.
Se eu fosse um computador, conseguiria entender todas as intruções? Sim.

*/