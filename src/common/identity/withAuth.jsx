import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import IdentityContext from './context';
import { isValidIdentity } from './utils';

/**
 * Higher order component that perform authentication checking
 *
 * If user is authenticated, the wrapped component is rendered
 * else, set browser url to a passed login url
 *
 * @param {String} name name of the identity
 * @param {String} loginUrl
 */
const withAuth = (name, loginUrl) => (WrappedComponent) => {
  const AuthChecker = (props) => {
    const { identities } = useContext(IdentityContext);
    const { location } = props; // passed from react router
    return isValidIdentity(identities[name])
      ? <WrappedComponent {...props} />
      : (
        <Redirect to={{
          pathname: loginUrl,
          state: { from: location },
        }}
        />
      );
  };
  return AuthChecker;
};

export default withAuth;
