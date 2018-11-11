/**
 * Reusable saga code for all projects
 */

import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as actionTypes from './constants/actionTypes';
import { ALERT_DISPLAY_DURATION } from './constants/params';
import { setIdentity, clearAlert } from './actions';
import { setAccessToken } from './http';
import {
  saveIdentity as saveIdentityToLocalStorage,
  loadIdentity as loadIdentityFromLocalStorage,
} from './helpers';

/**
 * Worker saga, will be fired on SAVE_IDENTITY action
 *
 * - Set identity to redux store
 * - Save identity to browser local storage.
 *   Then when application start, we will load identity
 *   from local storage to store
 * - Set access token for future http requests
 *
 * @param {Object} action
 */
function* saveIdentity(action) {
  const identity = action.payload;
  yield put(setIdentity(identity));
  saveIdentityToLocalStorage(identity);
  setAccessToken(identity.token.value);
}

/**
 * Worker saga, will be fired on LOAD_IDENTITY action
 * Load identity data from browser local storage and update redux store
 *
 * @param {*} action
 */
function* loadIdentity() {
  const identity = loadIdentityFromLocalStorage();
  if (identity) {
    yield put(setIdentity(identity));
    setAccessToken(identity.token.value);
  }
}

/**
 * Worker saga, will be fired on CLEAR_IDENTITY action
 * Clear identity data in browser local storage and redux store
 *
 * @param {*} action
 */
function clearIdentity() {
  saveIdentityToLocalStorage(false);
  setAccessToken(false);
}

/**
 * Worker saga, will be fired on SET_ERROR, SET_SUCCESS action
 * Clear alert message in redux store after a duration
 *
 */
function* autoHideAlert() {
  yield delay(ALERT_DISPLAY_DURATION);
  yield put(clearAlert());
}

/**
 * The main exported saga function
 */
export default function* commonSaga() {
  yield takeEvery(actionTypes.SAVE_IDENTITY, saveIdentity);
  yield takeEvery(actionTypes.LOAD_IDENTITY, loadIdentity);
  yield takeEvery(actionTypes.CLEAR_IDENTITY, clearIdentity);
  yield takeLatest([actionTypes.SET_ERROR, actionTypes.SET_SUCCESS], autoHideAlert);
}
