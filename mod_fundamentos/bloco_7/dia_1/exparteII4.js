const arraySkills = ['Javascript', 'CSS', 'HTML', 'Análise de Dados', 'Black belt'];
const ordArray = arraySkills.sort();
const newArray = ordArray.join(', ');

const partFour1 = (stringInput, parameter) => {
  const stringOutput = stringInput.replace('x', parameter);
  return stringOutput;
}

const partFour2 = stringOutput => {
  const result = `${stringOutput} Minhas cinco principais skills são: ${newArray}`;
  return result;
}

const result = partFour2(partFour1('Tryber x aqui!', 'Jessica'));
console.log(result);
