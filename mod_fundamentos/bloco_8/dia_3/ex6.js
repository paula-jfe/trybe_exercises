    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

/* Exercício guiado feito junto ao Isaac no plantão dia 8.3 */
function studentAverage() {
  const studentsWithAverages = notas.map((studentNotes, index) => {
    const notesSummation = studentNotes.reduce((accumulator, currentNote) => {
      return accumulator + currentNote;
    });
    const notesAmount = studentNotes.length;
    const average = notesSummation / notesAmount;
    const studentName = alunos[index];
    return {
      name: studentName,
      average: average,
    };
  });

  return studentsWithAverages;  
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);