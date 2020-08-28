let nota = -110;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80 && nota <= 90) {
    console.log("B");
} else if (nota >= 70 && nota <= 80) {
    console.log("C");
} else if (nota >= 60 && nota <= 70) {
    console.log("D");
} else if (nota >= 50 && nota <= 60) {
    console.log("E");
} else if (nota < 0) {
    console.log("Erro: Confira o valor da nota!");
} else if (nota > 100) {
    console.log("Erro: Confira o valor da nota!");
} else {
    console.log ("F");
}