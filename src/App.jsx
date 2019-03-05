// @flow
import React, { Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { hot } from 'react-hot-loader/root';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import routes from './routes';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history} key={Math.random()}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(r => (
            <Route
              key={r.name}
              path={r.path}
              render={() => <r.component />}
              exact
            />
          ))}
          <Route path="/" render={() => <Redirect to="/admin/dashboard" />} exact />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default hot(App);
