const arraySkills = ['Javascript', 'CSS', 'HTML', 'Análise de Dados', 'Black belt'];
const ordArray = arraySkills.sort();
const newArray = ordArray.join(', ');
console.log(newArray);

function partFour1(stringInput, parameter) {
  const stringOutput = stringInput.replace('x', parameter);
  return stringOutput;
}

function partFour2(stringOutput) {
const result = `${stringOutput} Minhas cinco principais skills são: ${newArray}`;
return result;
}

console.log(partFour1('Tryber x aqui!', 'Jessica'));
console.log(partFour1('Amém'));
