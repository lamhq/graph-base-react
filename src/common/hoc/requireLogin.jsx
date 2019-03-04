import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { isAccessTokenValid, getComponentName } from '../utils/core';

/**
 * Higher order component that perform authentication checking
 *
 * If user is authenticated, the wrapped component is rendered
 * else, set browser url to a passed login url
 *
 * @param {String} loginUrl
 */
const LoginRequired = loginUrl => (WrappedComponent) => {
  const GET_TOKEN = gql`
    {
      token @client {
        value
        expireAt
      }
    }
  `;

  const Wrapper = props => (
    <Query query={GET_TOKEN}>
      {({ data, loading }) => {
        if (loading) return null;

        const { token } = data;
        const { location } = props;
        const to = {
          pathname: loginUrl,
          state: { from: location },
        };
        return isAccessTokenValid(token)
          ? <WrappedComponent {...props} />
          : <Redirect to={to} />;
      }}
    </Query>
  );

  Wrapper.displayName = `LoginRequired(${getComponentName(WrappedComponent)})`;
  Wrapper.propTypes = {
    location: PropTypes.object.isRequired,
  };

  return Wrapper;
};

export default LoginRequired;
