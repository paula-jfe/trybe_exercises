let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        valImpares += 1;  
    }
}
console.log(valImpares); 

if (valImpares != 0) {
    console.log(`Você possui ${valImpares} números ímpares!`);
} else {
    console.log(`Nenhum valor ímpar encontrado!`);
}

/* Baby Steps:

Descubra (for) quantos valores ímpares (nova variável) existem no array e imprima (console.log) o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado".
1 - Adicionar o array;
2 - Criar uma variável com valor 0 para armazenar o resultado;
3 - Criar um loop que percorre o array;
4 - Criar um if com a condição da nova variável ser ímpar;
5 - Caso a varíavel obedeça a condição;
    Imprimir a quantidade de números ímpares no array;
6 - Caso não obedeça a condição;
    Imprimir nenhum valor ímpar encontrado.

Eu resolvi o problema? Sim.
Havia outras maneiras de resolver o problema? Acredito que não. 
A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos? Sim, acredito que não. 
Seria possível inverter ou retirar algum passo? Não.
Se eu fosse um computador, conseguiria entender todas as intruções? Sim.

*/

