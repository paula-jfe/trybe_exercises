bloco_9/dia_1

teste:

- Questão 1: No código abaixo você tem a função getUser, que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.
- Questão 2: No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.
- Questão 3: A função getCountry abaixo tem aproximadamente 50% de chance de obter com sucesso um país, tendo um callback para poder ser feita qualquer operação sobre o país retornado. Adicione um outro callback para getCountry, de forma que trate a mensagem de erro retornada.

ex1: Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

<!-- const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C -->

ex2: Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

<!-- const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C -->

ex3: A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

<!-- const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos -->

ex4: Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

<!-- const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo -->

ex5: Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.

<!-- const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...


sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo -->

ex6: Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.

<!-- const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError); -->

_____________________________________________________________________________________________________________________________________________________________________________________________________

bloco_9/dia_2

teste: Em seu editor, crie um novo arquivo e escreva o seguinte comando:

<!-- const promise = new Promise((resolve, reject) => {
}); -->

Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 5 e 10, será um sucesso. Nosso programa ficaria assim:

<!-- const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
}); -->

Execute algumas vezes o programa para ver o que acontece.
Uma coisa que você irá reparar é que quando o programa é bem sucedido, seu output aparece normalmente. Já quando ele é mal sucedido, ele lança um error! Essa é a principal diferença entre o resolve e o reject, exatamente o que queríamos demonstrar.
Vamos começar falando sobre o .then(). Para isso , vamos refatorar nossa promise:

<!-- const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg)); -->

Vamos ver o que acontece no código acima. A promise é executada e após sua execução, caso o número seja algo entre 5 e 10, o resolve retorna o número que é passado para o primeiro .then() como number. Por sua vez, ele retorna a frase Que sucesso =) nosso número foi ${number} que é passado como argumento para o segundo .then(), que o usa para "logar" no console.
Ok, mas o erro continua acontecendo, o que podemos fazer em relação a isso? Agora entra o .catch()! Vamos adicioná-lo ao código:

<!-- const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number > 10 || number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`)); -->

Se executarmos o código acima, vamos ver que o erro anterior desapareceu pois agora ele foi tratado! Assim como o .then() recebe o retorno de resolve, o .catch() recebe o retorno do reject, que é passado para ele como argumento de sua função interna. Assim, quando a promise retorna um reject, pula todos os .then() e é tratado no primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele, por esse motivo ele é geralmente usado no final.
Vamos criar uma promise que faz um fetch apenas para um endpoint específico. Para isso, vamos usar como "endpoint" o url "https://api.chucknorris.io/jokes/random?category=dev" que nos retorna elogios sobre Chuck Norris (elogios, porque ninguém faz piadas com Chuck Norris).
Agora veja o código abaixo:

<!-- const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
} -->

Vamos dar uma olhada rápida no código. Primeiro criamos a função verifiedFetch e passamos o url do nosso endpoint. Depois retornamos uma promise, transformando nossa função em uma função assíncrona. Agora, dentro da promise fazemos uma verificação. Se o endpoint for o certo, usamos o fetch para fazer uma chamada ao endpoint, transformamos a resposta em um json utilizando o método .json(), e para finalizar usamos o resolve para retornar a nossa resposta. Caso o url não seja o certo, levantamos um error. Perceba aqui que usamos o construtor new Error para levantar um error. Usar esse construtor dentro do reject é uma boa prática importante e vamos usá-lo a partir de agora.
Agora, leia o código abaixo e, sem executá-lo, responda a seguinte pergunta: O que será exibido no console ao se executar sendJokeToFriend?

<!-- const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna") -->

Agora execute a função sendJokeToFriend e veja se você acertou. Como vemos, recebemos o seguinte log: Promise { <pending> }. Vamos ver o que acontece aqui. Como vimos, verifiedFetch é uma promise, logo, é assíncrono. Quando o javascript executa a função, ele manda ela para "área especial" e passa para próxima função que é o console. Como a promise ainda não voltou com o conteúdo de message, vemos que a promise ainda está no estado pending. Para visualizar ainda melhor, retire o fetch e execute um resolve que retorna qualquer valor, assim a promise terminará sua execução imediatamente. Antes de executar, pense: Agora que a promise resolve imediatamente, quando o console.log for executado a Promise estará em pending ou já terá um resultado ? Execute e veja a resposta.
Como você viu, ela esta em pending, mesmo sendo resolvida imediatamente. Isso aconteceu pois, mesmo resolvendo na hora, a promise vai para sua área e sai da fila. Quando ela retorna, mesmo que de imediato, ela volta pro final da fila e o console.log está na frente, sendo executado primeiro. Para resolver esse problema existem 2 maneiras. A primeira é usar o fluxo da promise e colocar o console.log dentro do .then(). Essa solução e ótima, mas pode ficar dificil de se manter e ler a medida que o número de passos aumenta e a medida que cada passo fica mais complexo também, assim, surgiu a terceira digievolução evolução das promises, o async e o await!
O async é uma mão na roda. Essa funcionalidade transforma qualquer função em uma promise. Para começar a usá-la, basta colocar o async antes da definição da função. Agora é só colocar no congelador e ta pronto o sorvetinho transformar o que é resolve em return e o que é reject em throw e BOOM! Sua promise com async está pronta. Vamos refatorar a função verifiedFetch para usar async:

<!-- const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna") -->

A funcionalidade async sozinha é fantástica mas não resolve nosso problema com a função sendJokeToFriend. Assim, junto com ela vem um bônus, o await. O await só pode ser usado dentro de uma função com async e ela faz exatamente o que diz, faz com o que a função espere uma resposta para continuar sua execução. Vamos refatorar sendJokeToFriend:

<!-- const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna") -->

questoes: 
1 - O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
2 - Quando você tem que enfileirar várias callbacks, que problema surge?
3 - Por que as Promises são uma forma de se resolver esse problema?
4 - Quando você vai se comunicar com uma API, tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
5 - Dada a resposta anterior, o que é fetch e para que ele serve?

ex1: Como o primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos fazer juntos!
Primeiro, veja o manual da API do site icanhazdadjoke.com. Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API:
Para começar, vamos fazer uma requisição via browser. Visite o site https://icanhazdadjoke.com/, e perceba que ele devolve uma página HTML com uma piada aleatória.
Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/". Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/". Veja que agora recebemos apenas a piada aleatória em formato texto.
Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/". Agora a API retorna um objeto no formato JSON.
Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.
Utilize o HTML e o js a seguir como base:

<!-- <!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke(); -->

Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros.
- O endereço para o qual a requisição será feita, ou seja, a url do serviço.
- Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method: e headers:

<!-- const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject); -->

O segundo parâmetro( `myObject` ) define o tipo de request( `method: 'GET'` ) e o formato da resposta( `headers: { 'Accept': 'application/json' }` ), como visto nas requisições via `curl`.
A função fetch é uma Promise e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas .then(em caso de sucesso) e .catch(em caso de falha). A requisição fetch retorna um objeto Response. Utilizando .then, verifique a estrutura da resposta usando um console.log na response retornada pelo fetch.

<!-- fetch(API_URL, myObject)
  .then(response => console.log(response)); -->

Viu a reponse? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?
Para isso, usamos o método `.json()` na resposta da *API*. Esse método converte o conteúdo do `body` da *Response* e retorna uma outra *Promise*, que, quando bem-sucedida, retorna um *JSON* contendo as informações da piada.
A partir do `fetch`, troque o `console.log()` anterior pelo método `.json()` e imprima os dados da requisição.

<!-- fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data)); -->

Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!

ex2: Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

ex3: Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

ex4: Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"

ex5: Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

exbonus: Utilize somente Higher Order Functions para fazer as operações com o array;
Refatore a Promise para utilizar somente async e await.
