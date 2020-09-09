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

scriptexteste1: Você deverá fazer tudo a seguir usando somente JavaScript.
Parte I: 
1 - Acesse o elemento elementoOndeVoceEsta. 
2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 
3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? 
4 - Acesse o primeiroFilho a partir de pai. 
5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
8 - Agora acesse o terceiroFilho a partir de pai.

Parte II: 
1 - Crie um irmão para elementoOndeVoceEsta.
2 - Crie um filho para elementoOndeVoceEsta.
3 - Crie um filho para primeiroFilhoDoFilho.
4 - A partir desse filho criado, acesse terceiroFilho.

Parte III: 
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





