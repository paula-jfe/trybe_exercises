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