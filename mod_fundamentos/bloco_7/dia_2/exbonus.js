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

/* Exercício 5 feito na parte II */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/* Exercício bônus 1 */
const howManyStudents = object => {
  const keyObject =  Object.keys(object);
  let mathStudents = 0;
  for (index in keyObject) {
    if (object[keyObject[index]].materia === 'Matemática') {
      mathStudents = object[keyObject[index]].numeroEstudantes;
    }
  }
  return mathStudents;
}
console.log(howManyStudents(allLessons));

/* Exercício bônus 2 */
