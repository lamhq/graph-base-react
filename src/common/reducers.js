import { combineReducers } from 'redux'
import * as actionTypes from './constants/actionTypes'

/**
 * Reducer for store.common.requestFinished
 *
 * @param {Object} state
 * @param {Object} action
 */
function requestFinished(state = {}, action) {
  var requestName = action.payload
  switch (action.type) {
    case actionTypes.REQUEST_START:
      return { ...state, [requestName]: false }

    case actionTypes.REQUEST_FINISHED:
      return { ...state, [requestName]: true }

    default:
      return state
  }
}

/**
 * Initial state for store.common.alert
 *
 * @type {Object}
 */
const initialAlert = {
  type: 'success',
  message: ''
}

/**
 * Reducer for store.common.alert
 *
 * @param {Object} state
 * @param {Object} action
 */
function alert(state = initialAlert, action) {
  switch (action.type) {

    case actionTypes.SET_ERROR:
      return { ...state, type: 'error', message: action.payload }

    case actionTypes.SET_SUCCESS:
      return { ...state, type: 'success', message: action.payload }

    case actionTypes.CLEAR_ALERT:
      return initialAlert

    default:
      return state
  }
}

/**
 * Initial state for store.common.identity
 *
 * @type {Object}
 */
const initialIdentity = {
  id: null,
  username: 'Guest',
  token: {
    value: '',
    expiredAt: ''
  }
}

/**
 * Reducer for store.common.identity
 *
 * @param {Object} state
 * @param {Object} action
 */
function identity(state = initialIdentity, action) {
  switch (action.type) {

    case actionTypes.SET_IDENTITY:
      return action.payload

    case actionTypes.CLEAR_IDENTITY:
      return initialIdentity

    default:
      return state
  }
}

/**
 * Reducer for store.common.title
 *
 * @param {Object} state
 * @param {Object} action
 */
function title(state = '', action) {
  switch (action.type) {
    case actionTypes.SET_TITLE:
      return action.payload
    default:
      return state
  }
}

/**
 * Main reducer for common module
 */
export default combineReducers({
  // information of current logged user
  identity,

  // text displayed in alert component
  alert,

  // contain flags to check ajax requests are finished or not, useful when showing spinner
  requestFinished,

  // current page title
  title,
})