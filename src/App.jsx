// @flow
import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
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
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default hot(App);
