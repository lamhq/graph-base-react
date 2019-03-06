// @flow
import * as React from 'react';
import { IGrapqQLErrors, IToken } from '../types';


export function foo(x: ?number): string | number {
  if (x) {
    return x;
  }
  return 'default string';
}

/**
 * Get error message to display to user from graphql error response
 * @param {Object} error
 */
export function getErrorMessage(error: IGrapqQLErrors) {
  if (error.graphQLErrors.length > 0) {
    return error.graphQLErrors[0].message;
  }
  return '';
}

/**
 * Get server's form validation error from graphql error response
 * @param {Object} error
 */
export function getSubmissionErrors(error: IGrapqQLErrors) {
  if (!error || error.graphQLErrors.length === 0) {
    return undefined;
  }

  return error.graphQLErrors[0].extensions.exception.inputErrors;
}

export function saveAccessToken(token: string) {
  localStorage.setItem('token', JSON.stringify(token));
}

export function clearAccessToken() {
  localStorage.removeItem('token');
}

export function getAccessToken() {
  const s = localStorage.getItem('token');
  return s ? JSON.parse(s) : null;
}

export function isAccessTokenValid(token: IToken) {
  if (!token) return false;
  const { value, expireAt } = token;
  if (!value) return false;

  const now = new Date();
  const expireTime = expireAt ? new Date(expireAt) : null;
  if (!expireTime || expireTime < now) return false;

  return true;
}

/**
 * Get component's display name
 *
 * @param {Component} Component
 */
export function getComponentName(Component: React.ElementType) {
  return Component.displayName || Component.name || 'Component';
}
