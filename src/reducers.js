import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  // rest of your reducers
});

export default rootReducer;
