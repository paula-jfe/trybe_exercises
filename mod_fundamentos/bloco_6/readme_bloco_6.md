bloco_6/dia_1 

form/ script/ style: Crie um arquivo HTML chamado form.html para o formulário.
Caso julgue necessário, crie estilos CSS para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo styles.css.
Crie também um arquivo script.js para seu código JavaScript.
Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:

1 - Crie um <fieldset> para os seguintes dados pessoais:
Nome - Texto
Limite de 40 caracteres
Campo obrigatório
Email - Texto
Limite de 50 caracteres
Campo obrigatório
CPF - Texto
Limite de 11 caracteres
Campo obrigatório
Endereço - Texto
Limite de 200 caracteres
Campo obrigatório
Cidade - Texto
Limite de 28 caracteres
Campo obrigatório
Estado - ComboBox
Todos os estados do Brasil
Utilize estruturas de repetição via JavaScript para gerar os <option>
Campo obrigatório
Tipo - Radio Button
Casa, Apartamento
Campo obrigatório

2 - Crie outro <fieldset> para dados do seu último emprego
Resumo do currículo - TextArea
Limite de 1000 caracteres
Campo obrigatório
Cargo - Texto
Limite de 40 caracteres
Campo obrigatório
Descrição do cargo - Texto
Limite de 500 caracteres
Campo obrigatório
Data de início - Texto
Verificar o formato da data dd/mm/aaaa.
O dia deve ser > 0 e <= 31.
O mês deve ser > 0 e <= 12.
O ano não pode ser negativo.
Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada.
Campo obrigatório

3 - Logo abaixo do formulário, crie um botão que:
Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault().
Execute as validações que foram pedidas ao longo da montagem do formulário.
Monte uma <div> com o consolidado dos dados que foram inseridos no formulário.

4 - Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

_____________________________________________________________________________________________________________________________________________________________________________________________________

bloco_6/dia_2

form/ script: 

1 - Adicione um framework CSS de sua escolha ao formulário que você construiu na última aula e o utilize para estilizar o formulário.
Sugestões: Bulma, Bootstrap, Semantic UI e Materialize.

2 - Adicione uma biblioteca JavaScript de date picker ao formulário que você construiu na última aula. Utilize essa biblioteca no campo "Data de início" do formuário. Você pode remover as validações de data que adicionou, uma vez que a biblioteca se encarregará de permitir somente datas válidas.
Sugestões: DatePickerX e Pickaday.

3 - Adicione uma biblioteca JavaScript de validações ao formulário que você construiu na última aula. Utilize essa biblioteca para substituir as validações que você fez manualmente.
Sugestões: Just-validate e popup-validation.

_____________________________________________________________________________________________________________________________________________________________________________________________________

bloco_6/dia_5

ex1: 
- Altere o código para que a div amarela fique com a cor "azul" quando a largura da página estiver entre 900px e 1100px;
- Altere o código para que a div amarela fique com a cor "vermelha" quando a largura da página for até 600px;
- Crie uma outra div idêntica a existente e faça com que ela seja mostrada ao lado da div amarela quando a largura da página for maior que 1500px;
Dica: use Flexbox
- Faça com que a segunda div desapareça quando a largura da tela estiver entre 600px e 900px;
- Faça com que a primeira div desapareça quando a largura da tela for até 600px.

index-p1/ style-p1: Antes de seguir para o próximo vídeo, prepare um arquivo index-p1.html e um arquivo style-p1.css para que você possa ir reproduzindo o código que o autor irá fazer!
Agora o exercício é fazer junto com o vídeo! 🤓
Algumas dicas:
- Você vai perceber que o autor não se preocupou em organizar o CSS da melhor forma. Como você pode melhorar o código dele? (indentação).
O autor do vídeo usa uma má prática (anti-pattern) enquanto está desenvolvendo o código. Consegue descobrir qual é?
- Corrija o erro no código do autor do vídeo para que o CSS seja aplicado de uma forma melhor;
Dica: tem a ver com o uso de id e class para referenciar elementos HTML no CSS.
- Bônus: altere o código para que os elementos sejam alinhados usando Flexbox.

index-p2/ style-p2/ style-p2-mobile: Neste outro vídeo, o autor mostra uma outra forma de você aplicar media queries.
Antes de seguir para o vídeo, prepare um arquivo index-p2.html e um arquivo style-p2.css para que você possa ir reproduzindo o código que o autor irá fazer!
Mais uma vez, faça junto com o autor do vídeo para que você possa ver na prática como aplicar media queries.

style-p1-mobyle: Agora vamos praticar mais!
Altere o código do exercício anterior (index-p1.html e style-p1.css) para que o CSS específico da media query seja carregado a partir de um outro arquivo, por exemplo style-mobile-p1.css;
Ainda no código do exercício anterior, altere as cores de cada um dos elementos da página para uma escala de cinza quando a orientação da página mudar para a horizontal (landscape).