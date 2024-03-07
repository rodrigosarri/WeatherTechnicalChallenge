# Projeto Previsão do Tempo

Este projeto consiste em um aplicativo que consulta a previsão do tempo para uma cidade específica, utilizando uma API externa para buscar os dados e apresentando-os de maneira clara e interativa ao usuário.

## Funcionalidades

- **Pesquisa de Previsão do Tempo por Cidade**: Os usuários podem pesquisar a previsão do tempo inserindo o nome da cidade desejada. Os resultados incluem previsões para os próximos dias.
- **Exibição Detalhada ao Clicar**: Ao selecionar um dia específico, os usuários podem ver detalhes da previsão para aquele dia.
- **Histórico de Pesquisas**: O aplicativo mantém um histórico das pesquisas realizadas, permitindo acesso rápido às consultas anteriores.

## Tecnologias Utilizadas

### Frontend

- **React**: Utilizado para a construção da interface do usuário, proporcionando uma experiência interativa e responsiva.

### Backend

- **Linguagem**: Python (preferencial), PHP, ou Node.js para o desenvolvimento do servidor backend.
- **Banco de Dados**: PostGres ou SQLite para armazenar o histórico das pesquisas.
- **Frameworks e ORMs**: Possibilidade de utilizar frameworks ou ORMs que auxiliem na criação do webserver e na manipulação do banco de dados.

### APIs

- **API de Previsão do Tempo**: Utilização da API do site https://openweathermap.org para obter as previsões de 5 dias.

## Estrutura e Rotas da API

O backend disponibiliza rotas de acesso para:

- **Consulta do Tempo por Cidade**: Retorna a previsão do tempo para a cidade solicitada.
- **Histórico de Pesquisas**: Apresenta uma lista das pesquisas de previsão do tempo realizadas anteriormente.
