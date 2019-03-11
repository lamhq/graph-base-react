import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { isValidIdentity } from './utils';
import IdentityContext from './context';

const withIdentity = (name, loginUrl) => (WrappedComponent) => {
  const IdentityConsumer = (props) => {
    const { location } = props; // passed from react router
    const { identities, setIdentity, clearIdentity } = useContext(IdentityContext);
    const identity = identities[name] ? identities[name] : null;
    const setIdt = (data, token) => setIdentity(name, data, token);
    const clearIdt = () => clearIdentity(name);
    if (!isValidIdentity(identity) && loginUrl) {
      return (
        <Redirect to={{
          pathname: loginUrl,
          state: { from: location },
        }}
        />
      );
    }

    return (
      <WrappedComponent
        identity={identity}
        setIdentity={setIdt}
        clearIdentity={clearIdt}
        {...props}
      />
    );
  };
  return IdentityConsumer;
};

export default withIdentity;
