/**
 * Contain all reusable functions
 */

import { put, call } from 'redux-saga/effects';
// import validate from 'validate.js';
import http from './http';

import {
  requestStart,
  requestFinished,
  setError,
  clearIdentity,
} from './actions';
import { APP_NAME } from './constants/params';

/**
 * Get value of nested property by path
 *
 * @param {Mixed} obj
 * @param {String} path
 * @param {Mixed} defVal default value when the result is undefined
 */
export function getObjectValue(obj, keyPath, defVal) {
  const result = validate.getDeepObjectValue(obj, keyPath);
  return result || defVal;
}

/**
 * Save identity to local storage
 *
 * @param {Object} value
 */
export function saveIdentity(value) {
  saveItemToStorage('identity', value);
}

/**
 * Load identity from local storage
 *
 * @returns {Object}
 */
export function loadIdentity() {
  return loadItemFromStorage('identity');
}

/**
 * Check identity data is valid or not (expired)
 *
 * @param {Object} identity
 */
export function validateIdentity(identity) {
  const { token: { value, expiredAt } } = identity;
  if (!value) return false;

  const now = new Date();
  const expired = expiredAt ? new Date(expiredAt) : null;
  if (!expired || expired < now) return false;

  return true;
}

/**
 * Save data to browser's local storage
 *
 * @param {String} name
 * @param {Mixed} value
 */
export function saveItemToStorage(name, value) {
  const itemName = `${APP_NAME}_${name}`;
  if (value) {
    window.localStorage.setItem(itemName, JSON.stringify(value));
  } else {
    window.localStorage.removeItem(itemName);
  }
}

/**
 * Get data from browser's local storage
 *
 * @param {String} name
 */
export function loadItemFromStorage(name) {
  const itemName = `${APP_NAME}_${name}`;
  const str = window.localStorage.getItem(itemName);
  return str === null ? null : JSON.parse(str);
}

/**
 * Get component's display name
 *
 * @param {Component} Component
 */
export function getComponentName(Component) {
  return Component.displayName || Component.name || 'Component';
}

/**
 * Helper function used to create redux action
 *
 * @param {String} type
 * @returns {Object} redux action
 */
export function createAction(type) {
  return payload => ({ type, payload });
}

/**
 * Helper function used to create redux action for asynchronous task
 * In the returned action, beside type, payload fields, also
 * contain a promise object plus resolve, reject function for that promise
 *
 * Saga worker or redux thunk will call resolve, reject function when async tasks done
 * Component (or caller function) can use the returned promise to be notified when async tasks complete
 *
 * @param {String} type
 * @returns {Object} redux action
 */
export function createAsyncAction(type) {
  return (payload) => {
    let resolve,
      reject;
    const promise = new Promise((rs, rj) => {
      resolve = rs;
      reject = rj;
    });

    return {
      type,
      payload,
      promise,
      resolve,
      reject,
    };
  };
}

/**
 * Generator function to perform ajax request
 *
 * This function is called in redux saga code, example:
 * ```
 * var response = yield call(request, {
 *   url: '/admin/session',
 *   method: 'post',
 *   data: payload
 * })
 * ```
 *
 * - set flag in redux store to know whether request is pending or finished
 * - set error alert when request fail
 * - handle 401 (unauthorized) response
 *
 * @param {Object} config
 */
export function* request(config) {
  const { requestName = 'default', ...axiosConfig } = config;

  if (requestName) {
    yield put(requestStart(requestName));
  }

  // execute http request
  try {
    const response = yield call(http, axiosConfig);
    yield put(requestFinished(requestName));
    return response;
  } catch (error) {
    yield put(requestFinished(requestName));

    // display error message
    let message = 'An error occurred while processing your request';
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const data = error.response.data;
      error.errors = data.errors;
      message = typeof data === 'string' ? data : data.message;
    } else if (error.request) {
      // The request was made but no response was received
      message = 'Error while connecting to server.';
    }
    yield put(setError(message));

    // clear identity and show login page on 401 response
    if (error.response && error.response.status === 401) {
      yield put(clearIdentity());
    }

    throw error;
  }
}
