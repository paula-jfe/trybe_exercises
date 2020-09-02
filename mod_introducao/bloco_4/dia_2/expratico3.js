let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
let mediaAritmetica = 0;

for (let i = 0; i < numbers.length; i += 1) {
    somaNumbers += numbers[i];
}

mediaAritmetica = somaNumbers / numbers.length;
console.log(mediaAritmetica);

/* Baby Steps:

Para o terceiro exercício, calcule (nova variável) e imprima (console.log) a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos (nova variável) divido pelo número total de elementos.
1 - Adicionar o array;
2 - Criar uma variável com valor 0 para armazenar a soma;
3 - Criar uma variável com valor 0 para armazenar a média aritmética;
4 - Criar um loop que percorre o array;
5 - Incrementar a variável de soma com o valor correspondente a cada loop;
6 - Calcular a média aritmética;
7 - Imprimir o resultado da média aritmética.


Eu resolvi o problema? Sim.
Havia outras maneiras de resolver o problema? Acredito que não. 
A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos? Sim, acredito que não. 
Seria possível inverter ou retirar algum passo? Não.
Se eu fosse um computador, conseguiria entender todas as intruções? Sim.

*/