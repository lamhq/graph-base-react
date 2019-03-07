// @flow

export interface IGraphQLError {
  message: string;
}

export interface IResponse {

}

export interface INetworkError {
  name: string;
  response: IResponse;
  statusCode: number;
}

export interface IOperation {

}

export interface IGraphQLErrors {
  graphQLErrors: Array<IGraphQLError>;
  networkError: INetworkError;
  operation: IOperation;
  response: IResponse;
  forward: Object;
}
