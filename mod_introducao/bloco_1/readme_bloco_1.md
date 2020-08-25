bloco_1/dia_3
Parte II - Manipulação & Busca

countries: Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl: curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

- Mostre todo o conteúdo do arquivo countries.txt na tela.
- Mostre o conteúdo de countries.txt, página por página, até encontra a Zambia.
- Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
- Busque por Brazil no countries.txt.
- Busque novamente por brazil, mas agora utilizando o lower case.

phrases: Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.

- Busque pelas frases que não contenham a palavra fox.
- Conte o número de palavras do arquivo phrases.txt.
- Conte o número de linhas do arquivo phrases.txt.

empty.tbt and empty.pdf: Crie os arquivos empty.tbt e empty.pdf.

- Liste todos os arquivos do diretório unix_tests.
- Liste todos os arquivos que terminem com txt.
- Liste todos os arquivos que terminem com tbt ou txt.
- Acesse o manual do comando ls.

________________________________________________________________________________________________________________________________________________________________________________________________________
bloco_1/dia_4

exnomes1: Considere o arquivo exnomes1.txt para os exemplos a seguir. Seu conteúdo inicial é:
Ana
Maria
João

- O > redireciona a saída padrão para um arquivo, sendo assim caso haja algum conteúdo no arquivo será substituído.
exnomes2: cat > exnomes2.txt (exnomes2 é cópia de exnomes1)

- Digite o nome "Amanda" e encerre o cat (Ctrl + D). Resultado:
Amanda

- O >> anexa saída padrão a um arquivo, sendo assim ele adiciona o que for digitado ao final do arquivo em questão:
cat >> exnomes3.txt (exnomes3 é cópia de exnomes2)

- Digite o nome "Fernanda", depois `enter` e o nome "Fabiano" e encerre o cat (Ctrl + D). Resultado:
Amanda
Fernanda
Fabiano

- O | canaliza a saída do primeiro comando para a entrada do segundo, dessa forma conseguimos realizar comandos de forma sucessiva.
- Considere que queremos uma lista com todos os nomes que contenham a letra "f" e que nosso resultado esteja em ordem alfabética.
- Para isso podemos realizar o comando abaixo grep f nomes.txt | sort. Resultado: 
Fabiano
Fernanda

Parte I - Comandos de Input e Output
- Navegue até a pasta unix_tests.

exskills1: Crie um arquivo texto pelo terminal com o nome exskills1.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

exskills2: Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. (exskills2 é cópia de exskills1 + 5 itens)

- Conte quantas linhas tem o arquivo skills2.txt.
extopskills: Crie um arquivo chamado extopskills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

exphrases2: Crie um novo arquivo chamado exphrases2.txt pelo o terminal e adicione algumas frases de suas escolha.

- Conte o número de linhas que contêm as letras br.
- Conte o número de linhas que não contêm as letras br.

exphrases3: Adicione dois nomes de países ao final do arquivo exphrases2.txt (exphrases3.txt é cópia de exphrases2.txt + 2 nomes de países).

exbunch_Of_Things: Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

exbunch_Of_Things2: Ordene o arquivo bunch_of_things.txt (exbunch_Of_Things2 é cópia de exbunch_Of_Things ordenado).

___________________________________________________________________________________________________________________________________________________
bloco_1/dia_5

ex1: Abra o VSCode e crie um novo arquivo com a extensão .sh, ele pode levar o nome que você desejar. Para criar um novo arquivo você pode apertar Ctrl + N e uma nova aba será aberta.
Abra o terminal no VSCode, para isso vá a aba de navegação e clique em Terminal, com isso um terminal semelhante ao que você aprendeu a usar nos últimos dias será aberto, ele funciona exatamente igual ao que você já conhece. No terminal do VSCode utilize o comando chmod +x nome_script.sh para conceder a permissão de execução para esse arquivo. Utilize o comando ls -lag para verificar se permissão foi concedida com sucesso. No arquivo do script adicione na primeira linha o comando #!/bin/bash e então comece a escrever o seu código: 
 #!/bin/bash
 echo "Meu primeiro script em Shell Script!"

- Para executar o script certifique-se de:
- Salvar a alteração com Ctrl + s. Estar no diretório em que o arquivo se encontra e rode o comando ./ex1.sh

ex2: Com o conceito de variáveis bem explicado, fomos apresentados a uma forma de interagir com o programa e através da entrada de um usuário, definir o valor de uma variável com o comando read. Esse comando contém um parâmetro que permite que um texto seja adicionado na mesma linha, evitando o uso do echo:
 #!/bin/bash
 read -p "Qual o seu nome? " NOME
 echo "Meu nome é" $NOME
 
exdupla1: Escreva um Shell Script que imprima na tela a frase: "Shell Script é demais!".

exdupla2: Modifique o Shell Script do exercício anterior para incluir uma variável. A variável deverá receber o conteúdo da mensagem: "Shell Script com variáveis é demais!".

exdupla3: Escreva um Shell Script que guarde o resultado do comando hostname em uma variável. Imprima na tela uma mensagem: "Este script está rodando no computador: _" em que "_" é o resultado do comando hostname que está na variável.

exdupla4: Escreva um Shell Script que verifique se o caminho até um arquivo existe ("file path"). Se ele existir, imprima na tela a mensagem: "O caminho _ está habilitado!". Então, verifique se você tem permissão de escrita no arquivo. Se tiver, mostre a mensagem: "Você tem permissão para editar _". Caso contrário, mostre a mensagem: "Você NÃO foi autorizado a editar _". O _ nas mensagens deve ser substituído pelo ("file path").

exdupla5: Escreva um Shell Script que peça ao usuário um caminho de arquivo ou diretório e, em seguida, imprima na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo. Depois, faça um comando de listagem no arquivo/diretório usando a opção de listagem detalhada.

exdupla6: Modifique o Shell Script do exercício anterior de forma que ele aceite o nome do arquivo ou diretório como argumento (ou parâmetro), em vez de perguntar ao usuário. Pesquise nos recursos adicionais como utilizar os parâmetros (ou argumentos) no Shell Script.

exdupla7: Escreva um Shell Script que receba um diretório como argumento (ou parâmetro). Se o argumento não for um diretório, mostre a mensagem: "O argumento _ não é um diretório!". Se o argumento for um diretório, conte quantos arquivos existem nele e mostre a seguinte mensagem: "O _ tem _ arquivos.", em que você deve substituir os "_" pelo diretório e a quantidade de arquivos nele, respectivamente.

exbonus1: Escreva um Shell Script que imprima as palavras "shell", "script", "usando", "estrutura", "repetição", "for", "terminal" na tela, uma palavra por linha. Tente fazer isso usando o menor número de comandos possível.

exbonus2: Modifique o Shell Script do exercício 6 para aceitar uma quantidade ilimitada de arquivos ou diretórios como argumento (ou parâmetro).

exbonus3: Escreva um Shell Script que renomeie todos os arquivos do diretório atual que terminam em ".png", de forma que o nome do arquivo comece com a data atual no formato "YYYY-MM-DD". Por exemplo, se tiver um arquivo com o nome "kitten.png" no diretório atual, e a data de hoje for 16/04/2020, o script deverá mudar o nome do arquivo para "2020-04-16-kitten.png".
(Arquivos .png nesta pasta foram utilizados para executar o programa)

exbonus4: Modifique o Shell Script do exercício anterior para receber o diretório onde estão os arquivos e a extensão dos arquivos que devem ser modificados como argumento (ou parâmetro). Adicione também um mensagem mostrando como eram o como vão ficar os nomes dos arquivos a serem modificados.

exaula1 e exaula2 foram desafios elaborados durante a aula ao vivo.



