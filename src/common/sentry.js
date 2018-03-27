/**
 * Wrapper module for making raven integration more easily
 */

import Raven from 'raven-js'
import * as params from './constants/params'

/**
 * Flag to check whether to enable Raven
 * Currently it is only activated on production environment
 */
var isEnabled = params.ENVIRONMENT === 'production'

/**
 * Sentry DND url, see: https://docs.sentry.io/quickstart/#configure-the-dsn
 */
var sentryDNS = params.SENTRY_DNS

/**
 * Install ravenjs module.
 *
 * This function should be called once when initializing application
 */
export function install() {
  if (!isEnabled || !sentryDNS) return false
  Raven.config(sentryDNS).install()
}

export default Raven