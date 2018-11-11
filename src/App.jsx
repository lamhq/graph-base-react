import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader';

import style from './style.less';
import store, { history } from './store';

const TestPage = () => (<p className={style.text}>Welcome A</p>);
const TestPage2 = () => (<p>Welcome B</p>);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={TestPage} exact />
        <Route path="/a" component={TestPage2} exact />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(App);
