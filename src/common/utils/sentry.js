/**
 * Wrapper module for making raven integration more easily
 */

import Raven from 'raven-js';

/**
 * Sentry DND url, see: https://docs.sentry.io/quickstart/#configure-the-dsn
 */
const sentryDNS = process.env.SENTRY_DNS;

/**
 * Install ravenjs module.
 *
 * This function should be called once when initializing application
 */
export function install() {
  if (!sentryDNS) return false;
  Raven.config(sentryDNS).install();
  return true;
}

export default Raven;
