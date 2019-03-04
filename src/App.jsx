// @flow
import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default hot(App);
