import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import * as common from '../../common/actions'
import { getObjectValue } from '../../common/helpers'
import { validatePostData } from '../helpers'

export const setPosts = createAction('BLG/ADM/SET_POSTS')
export const loadPosts = () => {
  return dispatch => {
    return dispatch(common.request({
      url: 'admin/posts',
      method: 'get',
    })).then(response => {
      dispatch(setPosts(response.data))
    }).catch(() => null)
  }
}

export const deletePost = post => {
  return dispatch => {
    return dispatch(common.request({
      url: `admin/posts/${post._id}`,
      method: 'delete',
    })).catch(() => null)
  }
}

export const setPost = createAction('BLG/ADM/SET_POST')
export const setPostErrors = createAction('BLG/ADM/SET_POST_ERRORS')
export const setPostIsSaving = createAction('BLG/ADM/SET_POST_IS_SAVING')
export const loadPost = id => {
  return dispatch => {
    return dispatch(common.request({
      url: `admin/posts/${id}`,
      method: 'get',
    })).then(response => {
      dispatch(setPost(response.data))
    }).catch(() => null)
  }
}
export const savePost = (data, id) => {
  return dispatch => {
    dispatch(setPostErrors(null))
    var errors = validatePostData(data)
    if (errors) {
      dispatch(common.setError('Please correct your inputs.'))
      dispatch(setPostErrors(errors))
      return
    }

    var options =  {
      url: id ? `admin/posts/${id}` : 'admin/posts',
      method: id ? 'put' : 'post',
      data,
      progress: false
    }
    dispatch(setPostIsSaving(true))
    return dispatch(common.request(options))
      .then(response => {
        dispatch(setPostIsSaving(false))
        dispatch(push('/admin/posts'))
        dispatch(common.setSuccess('Data saved.'))
      }).catch(err => {
        dispatch(setPostIsSaving(false))
        dispatch(setPostErrors(getObjectValue(err, 'response.data.errors', null)))
      })
  }
}