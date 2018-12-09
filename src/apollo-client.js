import ApolloClient from 'apollo-boost';
import { getAccessToken } from './common/utils/core';

const client = new ApolloClient({
  uri: '/graphql',
  clientState: {
    defaults: {
      token: getAccessToken(),
    },
  },
});

export default client;
