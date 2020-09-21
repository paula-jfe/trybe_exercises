let simbolo = "*";
let valor = 5;
let forma = "";
let posicaoFinal = valor;


for (let linhaIndice = 0; linhaIndice < valor; linhaIndice += 1) {
    for (let colunaIndice = 0; colunaIndice <= valor; colunaIndice += 1) {
        if (colunaIndice < posicaoFinal) {
            forma += " ";
        } else {
            forma += simbolo;
        }
    }
    console.log(forma);
    forma = "";
    posicaoFinal = posicaoFinal - 1;
}




