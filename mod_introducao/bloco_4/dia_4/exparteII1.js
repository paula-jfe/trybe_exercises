/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false 
https://pt.stackoverflow.com/questions/102598/inverter-ordem-de-array para não perder array original */

let palindromo = "arara";
let arrayPalindromo = palindromo.split("");
let reverseArray = arrayPalindromo.slice(0).reverse();
let joinPalindromo = reverseArray.join("");

function checar(palindromo) {
    if (palindromo === joinPalindromo) {
        return true;
    } else {
        return false;
    }
}

console.log(arrayPalindromo);
console.log(reverseArray);
console.log(joinPalindromo);
console.log(checar(palindromo));
