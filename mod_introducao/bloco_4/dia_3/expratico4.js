let valor = 8;
let forma = "";
let simbolo = "*";

let meio = (valor + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (linhaIndice = 0; linhaIndice <= meio; linhaIndice += 1) {
  for (colunaIndice = 1; colunaIndice <= valor; colunaIndice += 1) {
    if (colunaIndice > ladoDireito && colunaIndice < ladoEsquerdo) {
        forma = forma + simbolo;
    } else {
        forma = forma + " ";
    }
  }
  console.log(forma);
  forma = "";
  ladoDireito -= 1;
  ladoEsquerdo += 1;
}