let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* Se 5 > 9, então posicao = numbers [0], numbers[0+1] = nova posição */
let posicao = 0;

for (let i = 0; i < numbers.length; i++) { /* contador i - para i menor que elementos da array numbers */
    for (let j = 0; j < numbers.length - 1; j++) { /* contador j - para j menor que elementos da array numbers e menor que i */
        if (numbers[j] > numbers[j + 1]) { /* se numbers na posição j é maior que j numbers na posição j + 1 (posição subsequente)*/
            posicao = numbers[j]; /* posicao = numbers na posição j */
            numbers[j] = numbers[j + 1]; /* numbers na posição j = numbers na posição j + 1 (posição subsequente)*/
            numbers[j + 1] = posicao; /*  */
        }
    }
}

console.log(numbers);

/* https://www.guj.com.br/t/ordenar-arrays-no-braco-resolvido/53255/4 para ajudar nos exercícios bônus */