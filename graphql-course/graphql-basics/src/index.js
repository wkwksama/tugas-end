import { GraphQLServer } from 'graphql-yoga';
import { resolvers, typeDefs } from './schema';


const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start((info) => {
  console.log('The server is up!', info);
});
