let valor = 7;
let entrada = [];
let baseDaMatriz = [];
let simbolo = "*";
let arrayMatriz = [];
let meioMatriz = (valor + 1) / 2;
let ladoEsquerdo = 1;
let ladoDireito = valor - 2;
let triangulo = "";

for (let coluna = 0; coluna < valor; coluna += 1) {
  baseDaMatriz[coluna] = simbolo;
}

arrayMatriz[0] = baseDaMatriz;
for (let linha = 1; linha < valor; linha += 1) {
  for (let coluna = 0; coluna < valor; coluna += 1) {
    if (coluna === ladoEsquerdo || coluna === ladoDireito) {
      entrada[coluna] = simbolo;
    } else {
      entrada[coluna] = " ";
    }
  }
  arrayMatriz[linha] = entrada;
  ladoEsquerdo += 1;
  ladoDireito -= 1;
  entrada = [];
  if (ladoEsquerdo > ladoDireito) break;
}

for (let linha = arrayMatriz.length - 1; linha >= 0; linha -= 1) {
  for (let coluna = 0; coluna < valor; coluna += 1) {
    triangulo = triangulo + arrayMatriz[linha][coluna];
  }
  console.log(triangulo);
  triangulo = "";
}