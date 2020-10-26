const resolveArray = [2, 3, 5, 10];
const arrayCreated = new Array(10);

const populateArray = () => {
  arrayCreated.fill(1);
  arrayCreated.forEach((item, index) => {
    const newNumber = Math.floor(Math.random() * 50) + 1;
    arrayCreated[index] = (Math.pow(newNumber, 2));
  })
  return arrayCreated;
}

populateArray();

const sum = arrayCreated.reduce((acc, nextValue) => {
  return acc + nextValue;
}, 0)

const asyncFunction = async () => {
  try {
    const promiseTest = await new Promise((resolve, reject) => {
      (sum < 8000) ? resolve(sum): reject();
    })
  } catch(error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
  const stepOne = resolveArray.map(item => sum / item);
  const stepTwo = stepOne.reduce((acc, nextNumber) => acc + nextNumber);
  console.log(stepTwo);
}

asyncFunction();
