import { combineReducers } from 'redux'

import admin from './admin/reducers'
import { SET_POSTS, SET_POST } from './constants/actionTypes'

const initialPostListState = {
  items: []
}

/**
 * Reducer for post list page
 *
 * @param {Object} state
 * @param {Object} action
 */
function postList(state = initialPostListState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}

const initialPostDetailState = {
  post: {}
}

/**
 * Reducer for post detail page
 *
 * @param {Object} state
 * @param {Object} action
 */
function postDetail(state = initialPostDetailState, action) {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        post: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  postList,
  postDetail,
  admin,
})