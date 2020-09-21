/* let fruits = [3, 4, 10, 1, 12]; */
let fruits = [1, 1, 0, 1, 1];
let somaFruits = 0;

for (let i = 0; i < fruits.length; i += 1) {
    somaFruits += fruits[i];
}
if (somaFruits <= 15) {
    console.log("Valor menor que 16!");
} else {
    console.log(somaFruits);
}
/* 
1 - Adicionar o array;
2 - Criar uma variável com valor 0;
3 - Criar um loop que percorre o array;
4 - Incrementar a variável com o valor correspondente a cada loop;
5 - Criar um if com a condição da váriavel ser maior que 15;
6 - Caso a varíavel obedeça a condição;
    Imprimir a varíavel
7 - Caso não obedeça a condição;
    Imprimir a mensagem "valor menor que 16"; */