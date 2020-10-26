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
  (sum < 8000) ? resolve(sum): reject()
})
.then((sum) => resolveArray.map(item => sum / item))
.then((array) => console.log(array.reduce((acc, nextNumber) => acc + nextNumber)))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
