window.onload = function () {
    let dateText = document.querySelector("#startDate");
    let stopDefault = document.querySelector("#stopButton");
    let clearButton = document.querySelector("#clearAll");
    let states = ["--", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];
    let selectStates = document.querySelector("#state");
    let resumeSummary = document.querySelector("#consoleLogForm");
/*     let firstBlock = document.querySelector("#step1");
    let secondBlock = document.querySelector("#step2");
    let thirdBlock = document.querySelector("#step3"); */
    let getName = document.querySelector("#fullName");
    let getEmail = document.querySelector("#email");
    let getCpf = document.querySelector("#cpfdata");
    let getAddress = document.querySelector("#address");
    let getCity = document.querySelector("#city");
    let getState = document.querySelector("#state");
    let getHouse = document.querySelector("#house");
    let getCond = document.querySelector("#condominium");
    let getResume = document.querySelector("#resume");
    let getPosition = document.querySelector("#position");
    let getJobDescription = document.querySelector("#jobDescription");
    let getStartDate = document.querySelector("#startDate");
    
    dateText.addEventListener("input", validateDate);
    stopDefault.addEventListener("click", summaryAll);
    clearButton.addEventListener("click", clearFunction);



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

    function clearFunction() {
        getName.value = "";
        getEmail.value = "";
        getCpf.value = "";
        getAddress.value = "";
        getCity.value = "";
        getState.value = "";
        getHouse.checked = false;
        getCond.checked = false;
        getResume.value = "";
        getPosition.value = "";
        getJobDescription.value = "";
        getStartDate.value = "";
        resumeSummary.innerHTML = "";
    }

    addStates()

    function addStates()  {
        for (index = 0; index < states.length; index += 1) {
            let createElement = document.createElement("option");
            createElement.innerText = states[index];
            selectStates.appendChild(createElement);
        }
    }

    function summaryAll() {
        preventDefault();
    }

    function preventDefault() {
        let createElementSummary = document.createElement("p");
        if (getHouse.checked == true) {
            "Nome: " + getName.value + "<br>"
            "Email: " + getEmail.value + "<br>"
            "CPF: " + getCpf.value + "<br>"
            "Endereço: " + getAddress.value + "<br>"
            "Cidade: " + getCity.value + "<br>"
            "Estado: " + getState.value + "<br>"
            "Casa" +  "<br>"
            "Currículo: " + getResume.value + "<br>"
            "Cargo: " + getPosition.value + "<br>"
            "Descrição do cargo: " + getJobDescription.value + "<br>"
            "Data de início: " + getStartDate.value + "<br>";
            resumeSummary.appendChild(createElementSummary);
            console.log(resumeSummary);
        } else if (getCond.checked == true) {
            createElementSummary.innerText = 
            "Nome: " + getName.value + "<br>"
            "Email: " + getEmail.value + "<br>"
            "CPF: " + getCpf.value + "<br>"
            "Endereço: " + getAddress.value + "<br>"
            "Cidade: " + getCity.value + "<br>"
            "Estado: " + getState.value + "<br>"
            "Apartamento" +  "<br>"
            "Currículo: " + getResume.value + "<br>"
            "Cargo: " + getPosition.value + "<br>"
            "Descrição do cargo: " + getJobDescription.value + "<br>"
            "Data de início: " + getStartDate.value + "<br>";
            resumeSummary.appendChild(createElementSummary);
            console.log(resumeSummary);
        }
    }
}