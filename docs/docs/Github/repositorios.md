---
title: Repositórios
sidebar_position: 2
---

Nessa página, vamos nos aprofundar nos famosos repositórios. Essenciais para gerenciar projetos de software, os repositórios são onde o seu código vive, permitindo que você colabore com outros membros da sua equipe de forma eficiente e organizada.

Aqui, você aprenderá o que são repositórios, como configurá-los e gerenciá-los, e como eles podem ser utilizados para melhorar seu trabalho diário. Dominar o uso de repositórios ampliará suas capacidades e tornará você um membro mais valioso de qualquer equipe de desenvolvimento.


## Introdução aos repositórios

Antes de começar vamos passar por termos importantes
:::info[IMPORTANTE]

:::

### O que são repositórios?

Um repositório é o elemento mais básico do GitHub. Pense nele como uma grande pasta virtual onde você pode armazenar os arquivos de um projeto e seu histórico de revisões de forma organizada. Dentro de um repositório, você pode manter vários tipos de arquivos, como códigos, documentos, imagens, e muito mais.

Cada vez que você faz uma alteração em um desses arquivos, o Git cria um "snapshot" daquela versão, que funciona como uma fotografia mostrando como os arquivos estavam em um determinado momento. Isso é útil, pois, se algo der errado no futuro, você pode voltar a essa versão anterior do projeto e corrigir o erro.

Os repositórios no GitHub podem ter vários colaboradores, permitindo que diversas pessoas trabalhem no mesmo projeto ao mesmo tempo. Além disso, eles podem ser públicos ou privados, dependendo de como você deseja compartilhar ou proteger o seu trabalho.

### Qual a utilidade deles?

Os repositórios são úteis por vários motivos. Vou citar alguns deles:

- **Registro de Mudanças**: Imagine que você está trabalhando em um projeto com outras pessoas e, quando volta a trabalhar no código, encontra um erro. Os repositórios permitem rastrear as alterações feitas por todos os membros da equipe, possibilitando saber quem fez a alteração, quando foi feita, e o que foi alterado. Isso facilita a correção do erro ou a retomada de uma versão anterior.

- **Colaboração**: Em um projeto, várias pessoas podem estar trabalhando em diferentes partes ao mesmo tempo. Um repositório permite que todos contribuam com suas alterações de forma ordenada, sem que um sobrescreva o trabalho do outro.

- **Organização**: Um repositório ajuda a manter todos os arquivos de um projeto juntos em um só lugar, organizados de maneira lógica. Isso facilita encontrar o que você precisa e manter tudo bem organizado. Além disso, diferentes projetos podem ser separados em diferentes repositórios, facilitando a diferenciação entre eles.

### Tipos de repositórios
Estamos muito acostumados com os repositórios do Github, que se tratam de respositórios remotos. Mas não são todos que sabem que existem dois tipos de repositórios.

- **Repositórios Locais**: São repositórios que ficam no seu próprio computador. Eles são úteis para trabalhar em mudanças e fazer testes antes de compartilhar seu trabalho com outras pessoas.

- **Repositórios Remotos**: São repositórios que ficam em servidores na internet, como o GitHub. Eles permitem que várias pessoas trabalhem juntas em um projeto, mesmo que estejam em lugares diferentes. Os repositórios remotos servem como um ponto central de colaboração, onde todos os desenvolvedores podem enviar e receber alterações, garantindo que todos estejam trabalhando com a versão mais atual do projeto.

## Criando e trabalhando com um repositório no GitHub

Criar um repositório no GitHub é um processo simples e direto. Se você tiver dúvidas sobre como fazê-lo, confira o material a seguir:

:::danger[MATERIAL INDICADO]

1. Documentação oficial: [`Como criar um repositório`](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories).

2. Vídeo: Criando seu primeiro repositório no GitHub.

<iframe width="560" height="315" src="https://www.youtube.com/embed/f26KI43FK58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media gyroscope; picture-in-picture" allowfullscreen
  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '16px', maxWidth: '100%'}}></iframe>

:::

Depois de criar um repositório, é importante aprender como trabalhar com ele. Os materiais a seguir vão mostrar como clonar um repositório e como fazer um fork.

:::danger[MATERIAL INDICADO]

1. Documentação oficial: [`Clonando um repositório`](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=desktop).

2. Documentação oficial: [`Criar um fork de um repositório`](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

:::

## Boas práticas

Manter um repositório bem organizado e eficiente é crucial para o sucesso de um projeto, especialmente quando várias pessoas estão envolvidas. A seguir, algumas dicas úteis:

- **Uso de branches**: O uso de branches em repositórios permite isolamento de funcionalidades, facilita a colaboração, organiza lançamentos, resolve conflitos, documenta trabalho e incentiva experimentação, garantindo eficiência e estabilidade no desenvolvimento de software. (Não se preocupe, vamos nos aprofundar nisso mais para frente!)

- **Uso de tags**: Use tags para marcar versões importantes ou releases. Isso ajuda a rastrear versões específicas e é útil para lançamentos de software. Utilize uma nomenclatura consistente para as tags, como "v1.0".

- **Releases**: Releases são importantes porque fornecem versões estáveis, documentadas e facilmente distribuídas do software, facilitando a colaboração, a referência e a gestão de versões. Elas são uma prática fundamental para manter um repositório bem organizado e profissional.

- **Organização dos arquivos**: Mantenha o repositório organizado, usando pastas para separar diferentes tipos de arquivos, como código-fonte, documentação, e recursos. Isso facilita a navegação e a compreensão do projeto.

- **Revisão de Código**:  Use pull requests para revisão de código. Isso permite que outros colaboradores revisem e sugiram melhorias antes que o código seja mesclado na branch principal, melhorando a qualidade do projeto. (Mas novamente,não se preocupe, vamos nos aprofundar nisso mais para frente!)

- **Documentação Detalhada**: Documente o código, incluindo comentários, arquivos de documentação, e exemplos. Isso ajuda outros desenvolvedores a entenderem o projeto e facilita a manutenção futura.
