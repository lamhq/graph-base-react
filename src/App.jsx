// @flow
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default hot(App);
