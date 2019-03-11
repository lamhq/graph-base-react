/**
 * Check identity data is valid or not (expired)
 *
 * @param {Object} identity
 */
export function isValidIdentity(identity) {
  if (!identity) return false;

  const { token: { value, expireAt } } = identity;
  if (!value) return false;

  const now = new Date();
  const expired = expireAt ? new Date(expireAt) : null;

  if (!expired || expired < now) return false;

  return true;
}

/**
 * Save identity to local storage
 *
 * @param {Object} value
 */
export function saveIdentity(value) {
  window.localStorage.setItem('identity', JSON.stringify(value));
}

/**
 * Load identity from local storage
 *
 * @returns {Object}
 */
export function loadIdentity() {
  const str = window.localStorage.getItem('identity');
  return str === null ? {} : JSON.parse(str);
}
