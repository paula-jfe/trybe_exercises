let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
let mediaAritmetica = 0;

for (let i = 0; i < numbers.length; i += 1) {
    somaNumbers += numbers[i];
}

mediaAritmetica = somaNumbers / numbers.length;

if (mediaAritmetica > 20) {
    console.log(`Valor ${mediaAritmetica} maior que 20!`)
} else {
    console.log(`Valor ${mediaAritmetica} menor ou igual a 20!`)
}

/* Baby Steps:

Com o mesmo código do exercício anterior, caso (if) valor final seja maior que 20, imprima (console.log) a mensagem: "valor maior que 20". Caso não seja (else), imprima a mensagem: "valor menor ou igual a 20".
1 - Adicionar o array;
2 - Criar uma variável com valor 0 para armazenar a soma;
3 - Criar uma variável com valor 0 para armazenar a média aritmética;
4 - Criar um loop que percorre o array;
5 - Incrementar a variável de soma com o valor correspondente a cada loop;
6 - Calcular a média aritmética;
7 - Criar um if com a condição da váriavel ser maior que 20;
8 - Caso a varíavel obedeça a condição;
    Imprimir valor maior que 20;
9 - Caso não obedeça a condição;
    Imprimir a mensagem valor menor ou igual a 20.

Eu resolvi o problema? Sim.
Havia outras maneiras de resolver o problema? Acredito que não. 
A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos? Sim, acredito que não. 
Seria possível inverter ou retirar algum passo? Não.
Se eu fosse um computador, conseguiria entender todas as intruções? Sim.

*/