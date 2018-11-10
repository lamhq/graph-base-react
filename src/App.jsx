import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

const TestPage = () => (<p>Welcome</p>);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={TestPage} exact />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
