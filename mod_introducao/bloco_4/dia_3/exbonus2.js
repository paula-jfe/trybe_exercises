let divisores = "";
let checar = 13;

for (let numero = 2; numero < checar && divisores !== 1; numero += 1) {
  divisores = 0;
  if (checar % numero == 0) divisores += 1;
}

if (divisores === 0) console.log(checar + " é um número primo");
else console.log(checar + " não é um número primo");