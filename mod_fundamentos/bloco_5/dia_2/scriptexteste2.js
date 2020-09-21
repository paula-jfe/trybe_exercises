//1
let irmaoElement = document.createElement("div");
irmaoElement.id = "irmao_elemento";
pai.appendChild(irmaoElement);

//2
let filhoElement = document.createElement("div");
filhoElement.id = "filho_elemento";
elementoOndeVoceEsta.appendChild(filhoElement);

//3
let filhoPrimeiro = document.createElement("div")
filhoPrimeiro.id = "filho_primeiro";
primeiroFilhoDoFilho.appendChild(filhoPrimeiro);

//4
document.querySelector('#filho_primeiro').parentNode.parentNode.nextElementSibling;