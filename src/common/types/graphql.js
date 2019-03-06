// @flow

export interface IGraphQLError {
  message: string;
}

export interface IGrapqQLErrors {
  graphQLErrors: Array<IGraphQLError>;
}
