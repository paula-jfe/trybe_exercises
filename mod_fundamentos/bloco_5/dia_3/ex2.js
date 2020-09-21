const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');

function changeColors () {
  caixaUm.style.backgroundColor = 'red';
  caixaDois.style.backgroundColor = 'yellow';
}
function trocaCor () {
  caixaDois.style.backgroundColor = 'blue';
}

caixaUm.addEventListener("click", trocaCor);

caixaDois.addEventListener("dblclick", changeColors);