let caixaTexto = document.querySelector('.caixa-texto');
let caixaUm = document.querySelector('.caixa1');
let caixaDois = document.querySelector('.caixa2');
let botaoUm = document.querySelector('.botao1');
let botaoDois = document.querySelector('.botao2');

function verificaAlerta () {
  alert("Go Trybe!");
}

function trocaCorUm () {
  caixaUm.style.backgroundColor = "green";
}

function trocaCorDois () {
  caixaDois.style.backgroundColor = "green";
}

function trocaTextoUm () {
  caixaUm.innerText = caixaTexto.value;
}

function trocaTextoDois () {
  caixaDois.innerText = caixaTexto.value;
}

botaoUm.addEventListener("mouseover", trocaCorUm);

botaoUm.addEventListener("click", trocaTextoUm);

botaoDois.addEventListener("mouseover", trocaCorDois);

botaoDois.addEventListener("click", trocaTextoDois);

caixaTexto.addEventListener("input", verificaAlerta);
