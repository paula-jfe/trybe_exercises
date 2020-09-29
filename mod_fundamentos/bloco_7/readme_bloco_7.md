bloco_7/dia_1

ex1parteI1: ES6: Compare Scopes of the var and let Keywords. When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function. The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

<!-- For example:

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3

As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior:

'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"

i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement. Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.  -->

This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.
- var should not exist in code.
- The variable i declared in the if statement should equal "block scope".
- checkScope() should return "function scope".

exparteI2: ES6: Mutate an Array Declared with const. The const declaration has many use cases in modern JavaScript. Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let. However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

<!-- "use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator. -->

An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.
- You should not replace const keyword.
- s should be a constant variable (by using const).
- You should not change the original array declaration.
- s should be equal to [2, 5, 7].

exparteII1: Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions e template literals.
Crie uma função que receba um número e retorne seu fatorial.
- Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.

exparteII2: Crie uma função que receba uma frase e retorne qual a maior palavra.
- Exemplo: longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") 
/retorna 'aconteceu'

exparteII3: Crie uma página que contenha:
- Um botão ao qual será associado um event listener;
- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

exparteII4: Crie um código JavaScript com a seguinte especificação:
** Não se esqueça de usar template literals **
- Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string. Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
- Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string. Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ...
#goTrybe".

_____________________________________________________________________________________________________________________________________________________________________________________________________

bloco_7/dia_2

exparteI1: Basic JavaScript: Accessing Object Properties with Variables
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
<!-- 
Here is an example of using a variable to access a property:

var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name. -->

Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
- PlayerNumber should be a number;
- The variable player should be a string;
- The value of player should be "Montana";
- You should use bracket notation to access testObj;
- You should not assign the value Montana to the variable player directly;
- You should be using the variable playerNumber in your bracket notation.

exparteI2: Basic JavaScript: Updating Object Properties
After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
<!-- For example, let's look at ourDog:

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper". -->

Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.
- You should update myDog's "name" property to equal "Happy Coder".
- You should not edit the myDog definition.

exparteII: Para os exercícios a seguir, use o seguinte código.
<!-- const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
}; -->

1 - Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3 - Crie uma função para mostrar o tamanho de um objeto.
4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
console.log(allLessons);
<!-- 
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
}; -->

6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
<!-- console.log(getValueByNumber(lesson1, 0)); -->

8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
<!-- console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false -->

exbonus: 
1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
<!-- console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */ -->
