export function getErrorMessage(error) {
  return error.graphQLErrors[0].message;
}

export function getSubmissionErrors(error) {
  if (!error || !error.graphQLErrors) {
    return undefined;
  }

  return error.graphQLErrors[0].extensions.exception.inputErrors;
}

export function saveAccessToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
}
