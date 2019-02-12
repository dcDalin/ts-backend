import "reflect-metadata";
import { ApolloServer, gql} from 'apollo-server-express'
import express from 'express';

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world'
  }
};


const app = express();

app.disable('x-powered-by');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
)