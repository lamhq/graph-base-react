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

export default null;
