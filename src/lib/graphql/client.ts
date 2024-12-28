import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql-pokemon2.vercel.app/',
    fetch, // Use cross-fetch
  }),
  cache: new InMemoryCache(),
});

export default client;
