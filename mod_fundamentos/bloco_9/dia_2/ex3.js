const newArray = [];
const resolveArray = [2, 3, 5, 10];

function populateArray() {
  for (index = 0; index < 10; index += 1) {
    const newNumber = (Math.floor(Math.random() * 50) + 1);
    newArray.push(Math.pow(newNumber, 2));
  }
  return newArray;
}

populateArray();

const sum = newArray.reduce((acc, nextValue) => {
 return acc + nextValue;
}, 0)

const promiseTest = new Promise((resolve, reject) => {
  (sum < 8000) ? resolve(sum) : reject()
})
.then((sum) => console.log(resolveArray.map(item => sum / item)))
.catch(() => console.log('Deu certo? Só que não!'));
