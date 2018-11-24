import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import store, { history } from './store';
import client from './apollo-client';

import LoginPage from './admin/login';

const App = () => (
  <ReduxProvider store={store}>
    <ApolloProvider client={client}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={LoginPage} exact />
        </Switch>
      </ConnectedRouter>
    </ApolloProvider>
  </ReduxProvider>
);

export default hot(module)(App);
