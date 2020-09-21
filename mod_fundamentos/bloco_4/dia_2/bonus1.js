/* https://www.youtube.com/watch?v=526edG7KsRA&feature=youtu.be para referência*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let posicao = 0;

for (let j = 0; j < numbers.length; j +=1) {
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > numbers [i + 1]) {
            posicao = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = posicao;
        }
    }
}

console.log(numbers);