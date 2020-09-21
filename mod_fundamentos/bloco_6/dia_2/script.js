window.onload = function () {
    let sendForm = document.querySelector("#sendButton");
    let clearButton = document.querySelector("#clearAll");
    let states = ["--", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
    let selectStates = document.querySelector("#state");
    let resumeSummary = document.querySelector("#consoleLogForm");
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
    var picker = document.getElementById('myInputId').DatePickerX.init({ format: "dd/mm/yyyy" });
    console.log(picker.value);
    
    sendForm.addEventListener("click", summaryAll);
    clearButton.addEventListener("click", clearFunction);

    new window.JustValidate('.newform', {
        rules: {
            name: {
                required: true,
                maxLength: 40,
            },
            email: {
                required: true,
                email: true,
                maxLength: 50,
            },
            cpf: {
                required: true,
                maxLength: 11,
                minLength: 11,
            },
            address: {
                required: true,
                maxLength: 200,
            },
            city: {
                required: true,
                maxLength: 28,
            },
            state: {
                required: true,
            },
            residence: {
                required: true,
            },
            resume: {
                required: true,
                maxLength: 1000,
            },
            job: {
                required: true,
                maxLength: 40,
            },
            description: {
                required: true,
                maxLength: 500,
            },
            date: {
                required: true,
            },
        }
    });
    
    new window.JustValidate('.form', {
        Messages: {
          required: 'The field is required',
          email: 'Please, type a valid email',
          maxLength: 'The field must contain a maximum of :value characters',
          minLength: 'The field must contain a minimum of :value characters',
        },
    });
    
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
        picker.value = "";
        resumeSummary.innerHTML = "";
    }

    addStates()

    function addStates() {
        for (index = 0; index < states.length; index += 1) {
            let createElement = document.createElement("option");
            createElement.innerText = states[index];
            selectStates.appendChild(createElement);
        }
    }

    function summaryAll(event) {
        event.preventDefault();
        let createElementSummary = document.createElement("p");
        let setNameValue = getName.value;
        let setEmailValue = getEmail.value;
        let setCpfValue = getCpf.value;
        let setAddressValue = getAddress.value;
        let setCityValue = getCity.value;
        let setStateValue = getState.value;
        let setResumeValue = getResume.value;
        let setPositionValue = getPosition.value;
        let setDescriptionValue = getJobDescription.value;
        let setDateValue = picker.value;
        console.log(setDateValue);

        if (getHouse.checked == true) {
            createElementSummary.innerHTML =
                "Nome: " + setNameValue + "<br>" +
                "Email: " + setEmailValue + "<br>" +
                "CPF: " + setCpfValue + "<br>" +
                "Endereço: " + setAddressValue + "<br>" +
                "Cidade: " + setCityValue + "<br>" +
                "Estado: " + setStateValue + "<br>" +
                "Casa" + "<br>" +
                "Currículo: " + setResumeValue + "<br>" +
                "Cargo: " + setPositionValue + "<br>" +
                "Descrição do cargo: " + setDescriptionValue + "<br>" +
                "Data de início: " + setDateValue + "<br>";
            resumeSummary.appendChild(createElementSummary);
        } else if (getHouse.checked == false) {
            createElementSummary.innerHTML =
                "Nome: " + setNameValue + "<br>" +
                "Email: " + setEmailValue + "<br>" +
                "CPF: " + setCpfValue + "<br>" +
                "Endereço: " + setAddressValue + "<br>" +
                "Cidade: " + setCityValue + "<br>" +
                "Estado: " + setStateValue + "<br>" +
                "Casa" + "<br>" +
                "Currículo: " + setResumeValue + "<br>" +
                "Cargo: " + setPositionValue + "<br>" +
                "Descrição do cargo: " + setDescriptionValue + "<br>" +
                "Data de início: " + setDateValue + "<br>";
            resumeSummary.appendChild(createElementSummary);
        }
    }
}