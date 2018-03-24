import { all, call, put, takeLatest } from 'redux-saga/effects'

import adminSaga from './admin/sagas'
import { request } from '../common/helpers'
import { setPosts, setPost } from './actions'
import { LOAD_POSTS, LOAD_POST } from './constants/actionTypes'

function* loadPosts(action) {
  const { resolve, reject } = action
  try {
    var response = yield call(request, {
      url: '/posts',
      method: 'get',
      requestName: 'loadPosts'
    })
    yield put(setPosts(response.data))
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

function* loadPost(action) {
  const { resolve, reject, payload: id } = action
  try {
    var response = yield call(request, {
      url: `/posts/${id}`,
      method: 'get',
      requestName: 'loadPost'
    })
    yield put(setPost(response.data))
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

function* postSaga() {
  yield takeLatest(LOAD_POSTS, loadPosts)
  yield takeLatest(LOAD_POST, loadPost)
}

export default function* blogSaga() {
  yield all([
    postSaga(),
    adminSaga(),
  ])
}