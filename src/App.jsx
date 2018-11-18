import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader';

import store, { history } from './store';
import LoginPage from './admin/login';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={LoginPage} exact />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(App);
