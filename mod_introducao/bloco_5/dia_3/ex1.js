const caixaUm = document.querySelector(".caixa1");
const caixaDois = document.querySelector(".caixa2");

function trocaCor() {
  caixaDois.style.backgroundColor = "cyan";
}

caixaUm.addEventListener("click", trocaCor);