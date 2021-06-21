Desafio com GraphQl

Rositório iniciado utilizando o Graphql com melhorias em relação ao retorno de APIS.

- Clonagem do projeto: https://github.com/NeuVanessa/desafio-challenge
- Instalar o npm install caso o node_modules não baixe junto com o project
- iniciar o servidor com o node index.js abrirá o servidor na porta 4003
- testar a query
PORT: http://localhost:4003/

query GET_NAME{
  suitables{
    id
    name
    mass
    hasStation
  }
}

[Os dados retornado é de todos os itens do Array]