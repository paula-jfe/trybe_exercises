bloco_2/dia_2

exteste: 
1) Navegue até a raiz do projeto com os scripts em Shell Script;
2) Verifique se não existe nada sem "commitar" utilizando git status;
3) Caso exista algo, verifique se é necessário e faça o commit, ou remova-o.
4) Crie uma nova branch com o nome shell-script-changes e faça checkout nela;
5) Em algum arquivo .sh, na linha #2 , adicione o comentário: "Eu sou Tryber e...";
6) Faça um `git add nomeDoSeuArquivoShell`;
7) Agora um `git commit -m "Mensagem que você gostaria"`;
8) E por último um `git push -u origin shell-script-changes`;
9) Abra um _Pull Request_ com uma descrição detalhada:
10) Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: _"Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..."_
11) Retorne para a branch principal, master, com o comando: git checkout master;
12) Verifique que você está na branch master, com o comando: git branch;
13) Crie uma nova branch shell-script-updates a partir da master e faça checkout nela;
14) No mesmo arquivo .sh que você modificou no passo 4, também na linha #2 adicione o comentário: "Vou ter muito sucesso na programação!";
15) Faça um git add nomeDoSeuArquivoShell
16) Agora um git commit -m "Mensagem que você gostaria" e por último um git push -u origin shell-script-updates;
17) Abra um Pull Request com uma descrição amigável.
18) No Slack, procure pelo canal "code-review-*" relativo à sua turma, e avise que você chegou a este ponto. O próximo passo será realizar o Code Review (CR) do projeto de outro estudante. 19) Entre em pelo menos um Pull Request e deixe alguns comentários para seus colegas;
20) Agora, faça o merge das branches shell-script-changes e shell-script-updates na branch master, através do Pull Request:
21) Primeiro, vá até a página do primeiro Pull Request (branch shell-script-changes) e faça o merge clicando no botão verde "Merge pull request";
22) Agora, vá até página do outro Pull Request (branch shell-script-updates) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta.
23) Você terá que resolver esse conflito antes de "mergear" o Pull Request. Clique no botão "Resolve conflicts", escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>>, elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge".
24) Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎
