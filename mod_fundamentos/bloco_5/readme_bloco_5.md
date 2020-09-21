bloco_5/dia_1 

exteste: Para começar a praticar, copie para um arquivo em sua máquina o exemplo abaixo. 

<!-- <!DOCTYPE html>
<html>
  <body>
    <h2 id="page-title">Título</h2>
    <p id="paragraph">Dê uma cor para este parágrafo!</p>
    <h4 id="subtitle">Subtítulo</h4>
    <p id="second-paragraph">Segundo parágrafo!</p>

    <script>
      var paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html> -->

scriptexteste1: Agora você! Faça o seguinte: 
1 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito. 
2 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo. 
3 - Por fim, recupere o subtítulo e altere-o também.

scriptexteste2: E a prática?! Tá aqui!
1 - Adicione ao seu HTML uma classe com alguns estilos para os seus dois parágrafos.
2 - Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
3 - Altere algum estilo do primeiro deles.
4 - Recupere o subtítulo pela tag.

exretangulos: Coloque a cor dos retângulos desse link como na cor desta imagem abaixo usando apenas o JavaScript!

expratico: É hora de aplicar seus conhecimentos em manipular os elementos do HTML!
1 - A seguir, você verá um trecho de código HTML e CSS.
2 - Crie um arquivo HTML dentro do diretório exercises/5_1 e copie o código a seguir.
3 - Leia as instruções que estão dentro de um comentário na tag <script>.
4 - Não se esqueça de fazer um commit a cada exercício!

<!-- <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.1</title>

    <style>
      div {
        border-color: black;
        border-style: solid;
      }
      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <h1 class="title">Exercício 5.1 - JavaEscripito </h1>
    <div class="main-content">
      <div class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </div>
    </div>
    <script>
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
    </script>
  </body>
</html> -->

_____________________________________________________________________________________________________________________________________________________________________________________________________

bloco_5/dia_2

exteste1: Adicione o código abaixo a uma página HTML e adicione uma tag script.

<!-- <div id="paiDoPai">
  <div id="pai">
    <div id="primeiroFilho"></div>
    <div id="elementoOndeVoceEsta">
      <div id="primeiroFilhoDoFilho"></div>
      <div id="segundoEUltimoFilhoDoFilho"></div>
    </div>
    Atenção!
    <div id="terceiroFilho"></div>
    <div id="quartoEUltimoFilho"></div>
  </div>
</div> -->

scriptexteste1 - Parte I: Você deverá fazer tudo a seguir usando somente JavaScript.
1 - Acesse o elemento elementoOndeVoceEsta. 
2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 
3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? 
4 - Acesse o primeiroFilho a partir de pai. 
5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
8 - Agora acesse o terceiroFilho a partir de pai.

scriptexteste2 - Parte II: 
1 - Crie um irmão para elementoOndeVoceEsta.
2 - Crie um filho para elementoOndeVoceEsta.
3 - Crie um filho para primeiroFilhoDoFilho.
4 - A partir desse filho criado, acesse terceiroFilho.

scriptexteste3 - Parte III: 
1 - Remova todos os elementos da página, menos pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

expratico: Antes de fazer os exercícios, crie um arquivo HTML na pasta exercises/5_2 e copie o código abaixo:

<!-- <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.2</title>
    <style>
      div {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html> -->

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.
Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
2 - Adicione a tag div com a classe main-content como filho da tag body;
3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
9 - Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
1 - Adicione a classe title na tag h1 criada;
2 - Adicione a classe description nas 3 tags h3 criadas;
3 - Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
4 - Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;
5 - Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
6 - Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

_____________________________________________________________________________________________________________________________________________________________________________________________________

bloco_5/dia_3

ex1: Você tem dois quadrados, com nomes de Caixa 1 e Caixa 2, quando clicar na Caixa 1, a cor da Caixa 2 deve ser trocada para ciano.
Altere apenas o JavaScript, criando o event listener adequado.

ex2: Novamente dois quadrados, com nomes de Caixa 1 e Caixa 2:
1 - Ao clicar uma vez na Caixa 1, a cor da Caixa 2 deve ser trocada para azul.
2 - Ao dar um clique-duplo na Caixa 2, a Caixa 1 deve ser trocada para  - vermelho e a Caixa 2 para amarela.
Altere apenas o JavaScript, criando o event listener adequado e caso precise, visite o link com todos os elementos.

ex3: Agora, uma caixa de texto e dois quadrados, as instruções são as seguintes:<br> Ao digitar alguma coisa na caixa de texto, o texto da caixa 1 seja alterado para o que foi escrito dentro da caixa letra a letra, enquanto você digita.<br> Ao clicar em qualquer lugar fora da caixa de texto após digitar alguma coisa na mesma, o texto da Caixa 2 seja alterado.<br> Altere apenas o JavaScript, criando o event listener adequado e caso precise, visite o link com todos os elementos.

ex4: Agora, uma caixa de texto, dois quadrados e dois botões, as instruções são as seguintes:<br> Ao passar o mouse no botão, troque a cor da caixa correspondente para verde.<br> Ao clicar no botão, troque o texto da caixa correspondente para o que estiver escrito na caixa de texto.<br> Mostre um alerta quando o usuário colar alguma informação dentro da caixa de texto escrito: "Go Trybe!"<br> Altere apenas o JavaScript, criando todo o necessário para o event listener funcionar adequadamente.

expratico1: Start with this webpage, which has several input elements and a button: Add a script tag to the bottom of the page for your code.
Add an event listener to the button so that it calls a makeMadLib function when clicked. In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

expratico2: Start with this webpage, which has inputs and buttons for things to calculate: Add a script tag, and add the functions from the calculator exercise:

Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).

For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
Bonus: respond to key presses so that the user doesn't have to click the button.

expratico3: Adicione um botão HTML na área indicada abaixo. Usando um <strong>EventListener</strong> adicione um evento ao botão, onde ao ser clicado um alerta contendo a mensagem "Você clicou no botão" deverá ser exibido. Para realizar essa tarefa utilize à tag &lt;script&gt; abaixo. Você deve declarar duas variáveis, uma chamada <strong>productPrice</strong> com o valor <strong>59,99</strong> e a outra chamada <strong>discount</strong> com o valor <strong>0,30</strong>. Na sequência adicione um botão um botão HTML abaixo da tag &lt;script&gt; e utilizando um <strong>EventListener</strong> adicione um evento a esse botão, onde ao ser clicado deve-se multiplicar <strong>productPrice</strong> por <strong>discount</strong> e então exibir um alerta contendo a mensagem "Desconto de R$(resultado)", sendo <strong>discount</strong> o resultado da multiplicação. Para essa última tarefa você irá precisar de duas imagens do mesmo tamanho. Adicione uma imagem a está página usando uma tag HTML &lt;img /&gt;. Usando os manipuladores de eventos <strong>onMouseOver()</strong> e <strong>onMouseLeave()</strong>, faça com que a imagem mude para a segunda imagem quando o ponteiro do mouse passar sobre ela e, em seguida, voltar para a primeira imagem quando o ponteiro do mouse for movido para fora da imagem. Além disso, sempre que um dos eventos for realizado deve-se logar no console qual dos eventos acabou de ocorrer.

expratico4: Who needs Milan when you have JavaScript? Start with this webpage, which has a single img tag of an animated GIF of a cat walking. Add a script tag at the bottom of the page, where you'll put all your code. Create a variable to store a reference to the img. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens. Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property. Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

expratico5: Neste exercício, você vai praticar a leitura e a interpretação de código HTML, CSS e JavaScript. Seu trabalho é adicionar o evento correto a cada um dos três elementos button da página e um evento ao elemento input, de forma que a função mais apropriada definida no JavaScript seja acionada quando quem usa interagir com cada elemento, clicando ou digitando, por exemplo.
Já existem quatro funções JavaScript definidas:
goDark();
complainMessage();
finishTheStory();
typeAndScream().
Dicas: Não é necessário mas se quiser pode alterar o CSS da página;
Coloque seu fone de ouvido enquanto estiver resolvendo este exercício (percebeu a tag audio no HTML?)!
Evento do JavaScript que ocorre ao digitar algo em um input.

_____________________________________________________________________________________________________________________________________________________________________________________________________

bloco_5/dia_4

expratico: Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte (Font family).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.