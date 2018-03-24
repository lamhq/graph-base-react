import { createAsyncAction, createAction } from '../common/helpers'
import { LOAD_POSTS, SET_POSTS, LOAD_POST, SET_POST } from './constants/actionTypes'

export const loadPosts = createAsyncAction(LOAD_POSTS)
export const setPosts = createAction(SET_POSTS)
export const loadPost = createAsyncAction(LOAD_POST)
export const setPost = createAction(SET_POST)
