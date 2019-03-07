/* eslint import/prefer-default-export: 0 */

export const createGraphqlErrorBoundary = payload => ({
  type: 'GRAPHQL_ERROR_BOUNDARY',
  error: payload,
});
