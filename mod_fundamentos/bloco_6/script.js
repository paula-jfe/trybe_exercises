window.onload = function () {
    let dateText = document.querySelector("#startDate");
    let dateText = document.querySelector("#stopButton");

    dateText.addEventListener("input", validateDate);
    dateText.addEventListener("click", stopAll);


    function validateDate() {
        let dateTextString = dateText.value;
        console.log(dateTextString);
        let numbersAsText = dateTextString.replace(/[^\d]+/g,',');
        let numbers = [];
        let arrayDate = numbersAsText.split(',');
        for (let i = 0; i < arrayDate.length; i += 1) {
            numbers.push(parseInt(arrayDate[i]));
        }
        console.log(arrayDate);
        console.log(numbers);
        for (index = 0; index < arrayDate.length; index += 1) {
            if (arrayDate[0] > 0 && arrayDate[0] <= 31 && arrayDate[1] > 0 && arrayDate[1] <= 12 && arrayDate[2] > 0) {
            } else {
                alert("Data inválida!");
                dateText.value = "";
                break;
            }
        }        
    }

    function stopAll() {
        preventDefault();
    }
}

/* let numeros = barDaTrybe.replace(/[^\d]+/g,',');
  let array = numeros.split(',');
  array.pop();
  let novoArray = [];
  let soma = 0;
  for (let i = 0; i < array.length; i += 1) {
    novoArray.push(parseInt(array[i]));
  } */