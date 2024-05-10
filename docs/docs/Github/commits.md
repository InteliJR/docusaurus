---
title: Commits e Pushes
sidebar_position: 3
---

# Commits e Pushes

## Introdução aos Commits e Pushes

### Definição de Commit
Um commit é como se fosse salvar uma versão de um arquivo após editá-lo. No entanto, quando você faz um commit no Git ao invés de simplesmente guardar alterações em um único arquivo, ele registra mudanças significativas em um ou mais arquivos dentro do sei branch do projeto. Cada commit recebe um identificador único chamado SHA ou hash, que não só rastreia as alterações específicas, mas também te diz exatamente o que mudou, quem mudou e quando foi alterado. 

Sempre que você commitar, é crucial incluir uma mensagem que descreva brevemente as mudanças realizadas, fornecendo clareza e contexto para outros colaboradores do projeto. Isso ajuda todos os envolvidos no projeto em questão a entender oque está acontecendo, facilitando a comunicação e alinhamento entre os membros da equipe.

Nesse contexto, algumas funcionalidades adicionais, como: 

- **Aprovação de Commit**: Em alguns casos, os repositórios têm políticas que exigem aprovações para os commits. Se o seuprojeto pede por isso, você precisará aprovar as alterações como parte do processo de commit;

- **Coautoria**: Você pode adicionar um coautor aos seus commits, uma prática ideal para o desenvolvimento colaborativo, reconhecendo explicitamente as contribuições de outros membros da equipe;

- **Rebase**: Se trata de uma técnica que permite reorganizar ou ajustar a série de commits, incluindo a ordem em que aparecem na linha do tempo do projeto, para organização lógica. 

### Definição de Push

Um push no Git é o processo de enviar seus commits locais para um repositório remoto. Depois de fazer alterações no seu projeto e registrá-las com commits, você precisa compartilhá-las para que fiquem acessíveis aos outros membros da equipe ou ao público. Você faz isso através do comando de push, que transfere as alterações do seu computador para o repositório online.

Mas por que fazer um push?
- **Visibilidade**: Quando você faz um push das suas alterações, qualquer pessoa trabalhando no projeto pode ver o que você fez. Isso mantém todo mundo na mesma página e evita duplicação de esforços;
- **Colaboração**: Após fazer um push, outros membros da equipe podem baixar suas alterações, trabalhar com elas, ou até mesmo fazer melhorias e correções;
- **Backup**: Ao fazer push das suas alterações para o GitHub, você está também criando uma cópia de segurança delas. Se algo der errado no seu computador local, suas alterações estão seguras no repositório remoto.

### Importância de Ambos 
Os commits são fundamentais em projetos de desenvolvimento de software porque criam um registro detalhado de cada mudança no código, facilitando a revisão e a colaboração ao permitir que os desenvolvedores voltem a versões anteriores se necessário. Já os pushes sincronizam essas alterações do ambiente local para o repositório remoto, como o GitHub, permitindo que outros colaboradores acessem as atualizações mais recentes e proporcionando um backup seguro das contribuições. Ambas as práticas são essenciais para manter a organização, a colaboração eficiente e a segurança do código em projetos coletivos.

## Como Fazer um Commit

### Passos para fazer um commit pelo terminal

**1. Verificar o status do seu repositório**
```bash
git status
```

**2. Adicione Arquivos ao Staging Area**

Para adicionar um único arquivo:
```bash
git add nome-do-seu-arqu
```
Para adicionar todos os arquivos alterados (cuidado para não incluir arquivos indesejados):
```bash
git add .
```

**3. Fazer o Commit**
```bash
git commit -m "Insira a mensagem do commit"
```

### Passos para fazer um commit pelo GitHub Desktop
Se você ainda possui dúvidas de como fazer um commit através da interface do GitHub Desktop acesse o seguinte material, com certeza ele te ajudará muito!
:::danger[MATERIAL INDICADO]

1. Documentação oficial: [`Fazendo um Commit pelo GitHub Desktop`](https://docs.github.com/pt/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop).

:::

## Boas Práticas (Conventional Commits)
Adotar um padrão estruturado para as mensagens de commit, é uma prática recomendada que traz diversos benefícios para a gestão de projetos. Aqui na Inteli Jr, buscamos seguir o padrão de Conventional Commits, a seguir serão apresentadas algumas diretrizes para ensiná-los como fazer commits mais eficientes. 

### Estrutura das Mensagens de Commit
1. Em primeiro lugar temos os tipos, que indicam o próposito do commit
:::info[TIPOS]

**'feat'**: Introduz um novo recurso;

**'fix'**: Corrige um bug ou erro;

**'docs'**: Alterações na documentação;

**'style'**: Alterações que não afetam o significado do código (por exemplo: espaço em branco, formatação, ponto e vírgula ausente);

**'refactor'**: Refatoração do código que não corrige bugs e não adiciona um novo recurso;

**'test'**: Adicionando testes ou corrigindo testes existentes;

**'chore'**: Atualizações de tarefas e manutenções sem impactos no código de produção.
:::

2. Escopo (opcional): Uma palavra que especifica o local da mudança (por exemplo, componente ou arquivo modificado).
3. Descrição: Uma descrição breve, clara e concisa das alterações, explicando o que e por que, não como.

### Exemplos de Mensagens de Commit: 
:::info[EXEMPLOS]
- feat(autenticação): adiciona suporte a JWT
- fix(relatórios): trata caso limite com dados zero
- docs(readme): atualiza instruções de instalação
- refactor(núcleo): melhora desempenho do carregamento de usuário
:::

### Consistência e Clareza
Adotar o padrão Conventional Commits em projetos promove consistência e clareza nas mensagens de commit. Essa prática estabelece uma estrutura uniforme que facilita a compreensão do histórico de alterações e torna cada commit autoexplicativo, reduzindo ambiguidades e melhorando a comunicação entre os membros da equipe.

### Para Maior Compreensão
:::danger[MATERIAL INDICADO]

1. Documentação oficial: [`Conventional Commits`](https://www.conventionalcommits.org/en/v1.0.0/).

2. Documentação de padrões: [`Conventional Commits Pattern`](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)

:::

## Como Fazer um Push

### Executando um Push

**1. Comando Básico**

Utilize o comando git push seguido do nome do repositório remoto e da branch para a qual você deseja enviar as alterações. Exemplo: repositório chamado 'origin'.
```bash
git push origin sua_branch
```

**3. Push de tags**

Para enviar tags para o repositório remoto, use o comando git push seguido de --tags. Isso é útil para marcar releases ou pontos importantes no histórico do projeto:
```bash
git push origin --tags
```

### Resolvendo Conflitos
Às vezes, um push pode ser rejeitado se houver alterações no repositório remoto que ainda não estão no seu repositório local. Isso geralmente acontece quando outros colaboradores fizeram push de suas mudanças antes de você. Segue o passo a passo de como resolver isso:

**1. Puxe as Alterações Mais Recentes**

Antes de tentar o push novamente, você precisa atualizar seu repositório local. Use o comando git pull para buscar e integrar as alterações recentes do repositório remoto:
```bash
git pull origin main
```
**2. Resolva os Conflitos**

Se houver conflitos entre as suas alterações e as alterações recém-puxadas, o Git alertará e você precisará resolver esses conflitos manualmente.

**3. Faça um Novo Commit**
Após resolver todos os conflitos, faça um novo commit com as alterações resolvidas:
```bash
git add .
```
```bash
git commit -m "Resolve conflitos entre as alterações locais e remotas"
```

**4. Tente o Push Novamente**
Com os conflitos resolvidos e as alterações commitadas, tente fazer o push novamente:
```bash
git push origin sua_branch
```