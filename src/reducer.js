import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as graphQLError } from './common/GraphqlErrorBoundary';

export default combineReducers({
  form: formReducer,
  graphQLError,
});
