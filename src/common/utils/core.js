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

export function clearAccessToken() {
  localStorage.removeItem('token');
}

export function getAccessToken() {
  const s = localStorage.getItem('token');
  return s ? JSON.parse(s) : null;
}

export function isAccessTokenValid(token) {
  if (!token) return false;
  const { value, expireAt } = token;
  if (!value) return false;

  const now = new Date();
  const expireTime = expireAt ? new Date(expireAt) : null;
  if (!expireTime || expireTime < now) return false;

  return true;
}

/**
 * Get component's display name
 *
 * @param {Component} Component
 */
export function getComponentName(Component) {
  return Component.displayName || Component.name || 'Component';
}
