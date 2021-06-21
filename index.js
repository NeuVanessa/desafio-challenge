const { ApolloServer, gql } = require('apollo-server');

const server = new ApolloServer({
    typeDefs: gql`
    type Query {
        suitable: suitablePlanets!
        suitables: [suitablePlanets!]!      
 }

 type suitablePlanets{
     id: ID!
    name: String!
    mass: Float!
    hasStation: Boolean! 
  
}



 `,
    resolvers: {
        Query: {
            suitable: () => {
                return {
                    id: '0222',
                    name: 'Planeta X',
                    mass: 14.8585,
                    hasStation: true
                };
            },

            suitables: () => {
                return [
                    {
                        id: '1',
                        name: 'Planeta Xa',
                        mass: 14.8585,
                        hasStation: true
                    },
                    {
                        id: '3',
                        name: 'Planeta Xb',
                        mass: 14.8585,
                        hasStation: true
                    },

                    {
                        id: '2',
                        name: 'Planeta Xc',
                        mass: 14.8585,
                        hasStation: true
                    },
                ];
            },
        },

    },

});

server.listen(4003).then(({ url }) => {
    console.log(`🚀  O FOGUETE PARA A ESTAÇÃO DA VOLT FOI LANÇADO 🚀 ${url} `);
});