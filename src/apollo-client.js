import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { message as alert } from 'antd';

import { getAccessToken } from './common/utils/core';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAccessToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError((err) => {
  const { response, graphQLErrors, networkError } = err;
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.log(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    ));
  }

  if (networkError) {
    alert.error(networkError.bodyText);
    response.errors = null;
  }
});


const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    errorLink,
    httpLink,
  ]),
  cache: new InMemoryCache(),
  clientState: {
    defaults: {
      token: getAccessToken(),
    },
  },
});

export default client;
