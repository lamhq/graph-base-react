/**
 * Http client module to perform ajax request
 * All source codes in application will use this module instead of calling axios directly
 */

import axios from 'axios'
import * as params from './constants/params'

var httpClient = axios.create({
  baseURL: params.API_URL,
  timeout: params.REQUEST_TIMEOUT,
  headers: {}
})

export function setAccessToken(token) {
  if (token) {
    httpClient.defaults.headers.common['Authorization'] = `bearer ${token}`
  } else {
    httpClient.defaults.headers.common['Authorization'] = false
  }
}

export default httpClient