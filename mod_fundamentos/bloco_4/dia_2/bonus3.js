let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i + 1]) {
        novoArray.push(numbers[i] * numbers[i + 1]);
    } else {
        novoArray.push(numbers[i] * 2);
    }   
}

console.log(novoArray);