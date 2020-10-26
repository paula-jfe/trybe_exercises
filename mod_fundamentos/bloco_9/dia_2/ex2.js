
const newArray = [];

function populateArray() {
  for (index = 0; index < 10; index += 1) {
    const newNumber = (Math.floor(Math.random() * 50) + 1);
    newArray.push(Math.pow(newNumber, 2));
  }
  return newArray;
}

populateArray();
console.log(newArray);

const summatory = newArray.reduce((acc, nextValue) => {
 return acc + nextValue;
}, 0)

console.log(summatory);

const promiseTest = new Promise((resolve, reject) => {
  (summatory < 8000) ? resolve() : reject()
})
.then(() => console.log('Deu certo? Deu sim!'))
.catch(() => console.log('Deu certo? Só que não!'));
