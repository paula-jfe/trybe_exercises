let custo = 0;
let valVenda = 20;
let custoTotal = custo + (0.2 * custo);
let lucro = valVenda - custoTotal;

/* Qual o lucro vendendo 1000 unidades do produto? */

if (lucro > 0 && custo >= 0 && valVenda >= 0) {
    console.log(lucro * 1000);
} else {
    console.log("Erro: Confira os valores digitados!");
}
