import ApolloClient from 'apollo-boost';

import { actions } from './common/GraphqlErrorBoundary';
import store from './store';

const client = new ApolloClient({
  uri: '/graphql',
  onError: (error) => {
    store.dispatch(actions.createGraphqlErrorBoundaryAction(error));
  },
});

export default client;
