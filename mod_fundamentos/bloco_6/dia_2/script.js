window.onload = function () {
    let sendForm = document.querySelector("#sendButton");
    let clearButton = document.querySelector("#clearAll");
    let states = ["", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
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
    document.getElementById('myInputId').DatePickerX.init({ format: "dd/mm/yyyy" });
    
    
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
            
        },

        messages: {
            name: {
                required: 'Campo obrigatório',
                maxLength: 'O limite máximo de caracteres é 40',
            },
            email: {
                required: 'Campo obrigatório',
                email: 'Digite um email válido',
                maxLength: 'O limite máximo de caracteres é 50',
            },
            cpf: {
                required: 'Campo obrigatório',
                maxLength: 'O limite máximo de caracteres é 11',
                minLength: 'O limite mínimo de caracteres é 11',
            },
            address: {
                required: 'Campo obrigatório',
                maxLength: 'O limite máximo de caracteres é 200',
            },
            city: {
                required: 'Campo obrigatório',
                maxLength: 'O limite máximo de caracteres é 28',
            },
            state: {
                required: 'Campo obrigatório',
            },
            residence: {
                required: 'Campo obrigatório',
            },
            resume: {
                required: 'Campo obrigatório',
                maxLength: 'O limite máximo de caracteres é 1000',
            },
            job: {
                required: 'Campo obrigatório',
                maxLength: 'O limite máximo de caracteres é 40',
            },
            description: {
                required: 'Campo obrigatório',
                maxLength: 'O limite máximo de caracteres é 500',
            },
            date: {
                required: 'Campo obrigatório',
            },
        },

        invalidFormCallback: function (error) {
            console.log(error)

        },
        submitHandler: function (form, values) {
            console.log(form);
            console.log(values);
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
            let setDateValue = document.getElementById('myInputId').value;
    
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
        /* event.preventDefault(); */
    }
}