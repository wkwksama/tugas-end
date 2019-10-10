import { GraphQLServer } from 'graphql-yoga';
import { resolvers, typeDefs } from './schema';

const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGO_STRING || 'mongodb://localhost:27017/rakyat62';
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('mongo connected', mongoUrl);
  }
});

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start({ port: process.env.PORT || 4000 }, (info) => {
  console.log('The server is up!', info);
});
