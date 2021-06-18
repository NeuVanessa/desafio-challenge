const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type suitablePlanets {
    name: String
    mass: Float
    hasStation: Boolean
  }

  type Query {
    planet: [suitablePlanets]
  }

`;

const planet = [
    {
        name: 'Kepler-128',
        mass: 15.09000000,
        hasStation: true
    },
    {
        name: 'Kepler-129',
        mass: 22.80400000,
        hasStation: false
    },
    {
        name: 'Kepler-130',
        mass: 82.20017000,
        hasStation: true
    },
    {
        name: 'Kepler-131',
        mass: 8.45745800,
        hasStation: true
    },
];


const resolvers = {
    Query: {
        planet: () => planet,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  O FOGUETE PARA A ESTAÇÃO DA VOLT FOI LANÇADO 🚀 ${url} `);
});