export const initialState = { error: null };

function reducer(state, action) {
  switch (action.type) {
    case 'GRAPHQL_ERROR_BOUNDARY':
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...initialState,
      };
  }
}

export default reducer;
