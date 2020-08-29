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

