import { API_URI } from 'src/constants';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const typeDefs = require('src/graphql/schema.graphql');

const client = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache(),
  typeDefs: typeDefs,
});

export default client;
