let salBruto = 5000;
let inss = 0.92;
let ir = 0;
let salParcial = 0;
let salLiquido = 0;

if (salBruto <= 1556.94) {
    salParcial = (inss * salBruto);
} else if (salBruto > 1556.94 && salBruto <= 2594.92) {
    salParcial = ((inss - 0.01) * salBruto);
} else if (salBruto > 2594.92 && salBruto <= 5189.82) {
    salParcial = ((inss - 0.03) * salBruto);
} else if (salBruto > 5189.82) {
    salParcial = (salBruto - 570.88);
} else {
    console.log("Confira o valor digitado");
}

if (salParcial <= 1903.98 && salParcial > 0) {
    ir = ir;
    salLiquido = salParcial - ir;
    console.log(salLiquido);
} else if (salParcial > 1903.98 && salParcial <= 2826.65) {
    ir = ((salParcial * 0.075) - 142.80);
    salLiquido = salParcial - ir;
    console.log(salLiquido);
} else if (salParcial > 2826.65 && salParcial <= 3751.05) {
    ir = ((salParcial * 0.15) - 354.80);
    salLiquido = salParcial - ir;
    console.log(salLiquido);
} else if (salParcial > 3751.05 && salParcial <= 4664.68) {
    ir = ((salParcial * 0.225) - 636.13);
    salLiquido = salParcial - ir;
    console.log(salLiquido);
} else { 
    ir = ((salParcial * 0.275) - 869.36);
    salLiquido = salParcial - ir;
    console.log(salLiquido);
}