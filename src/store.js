import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers';
import rootSaga from './sagas';

// enable redux devtool chrome extension
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

// add the react-router-redux reducer to store on the `router` key
// also apply our middleware for navigating
export const history = createBrowserHistory();

// add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState = {};

// create the store
const store = createStore(
  createRootReducer(history), // root reducer with router state
  initialState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware,
    ),
  ),
);

// run saga
sagaMiddleware.run(rootSaga);

export default store;
