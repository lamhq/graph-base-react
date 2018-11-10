import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';

const TestPage = () => (<p>Welcome</p>);
const TestPage2 = () => (<p>Welcome2</p>);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/a" component={TestPage} exact />
        <Route path="/" component={TestPage2} exact />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
