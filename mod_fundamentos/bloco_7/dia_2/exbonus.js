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
const object1stKeys = Object.keys(allLessons);
const prof = allLessons[object1stKeys[0]].professor;
const stud = allLessons[object1stKeys[0]].numeroEstudantes;
console.log(prof);
console.log(stud);

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
/* Aulas que o professor ministrou e número total de estudantes */
const report = (object, teacherName) => {
  const object1stKeys = Object.keys(allLessons);
  let studentsNumber = 0;
  let reportObject = {};
  let classes = [];
  for (index = 0; index < object1stKeys.length; index += 1) {
    if (object[object1stKeys[index]].professor === teacherName) {
      studentsNumber += object[object1stKeys[index]].numeroEstudantes;
      classes.push(object[object1stKeys[index]].materia);
    }
  }
  reportObject.professor = teacherName;
  reportObject.estudantes = studentsNumber;
  reportObject.aulas = classes;
  return reportObject;
}

console.log(report(allLessons, 'Maria Clara'));
