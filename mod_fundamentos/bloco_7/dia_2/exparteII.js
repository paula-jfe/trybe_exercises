const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Exercício 1 */
const addTurn = (object, key, value) => {
  object[key] = value;
}
addTurn(lesson2, 'turno', 'manhã');
console.log(lesson2);

/* Exercício 2 */
const listKeys = object => {
  Object.keys(object);
  return Object.keys(object);
}
console.log(listKeys(lesson1));

/* Exercício 3 */
const objectLength = object => Object.keys(object).length;
console.log(objectLength(lesson1));

/* Exercício 4 */
const listValues = object => Object.values(object);
console.log(listValues(lesson3));

/* Exercício 5 */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/* Exercício 6 */
const getStudentsNumber = object => {
  let studentsNumber = 0;
  let studentsArray = Object.keys(object);
  for (index in studentsArray) {
    studentsNumber += object[studentsArray[index]].numeroEstudantes;
  }
  return studentsNumber;
}
console.log(getStudentsNumber(allLessons));

/* Exercício 7 */
const getKeyPosition = (object, position) => Object.values(object)[position];
console.log(getKeyPosition(lesson1, 0));

/* Exercício 8 */
const verifyObject = (object, key, value) => {
  const arrayVerify = Object.entries(object);
  for (index = 0; index < arrayVerify.length; index += 1) {
    if (arrayVerify[index][0] === key && arrayVerify[index][1] === value) {
      return true;
    }
  }
  return false;
}

console.log(verifyObject(lesson3, 'turno', 'noite'));