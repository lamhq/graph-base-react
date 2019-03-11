import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { isValidIdentity } from './utils';
import { IdentitiesContext, IdentityContext } from './contexts';

const withIdentity = (name, loginUrl) => (WrappedComponent) => {
  const IdentityConsumer = (props) => {
    const { location } = props; // passed from react router
    const { identities, setIdentity, clearIdentity } = useContext(IdentitiesContext);
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

    const context = {
      identity,
    };

    return (
      <IdentityContext.Provider value={context}>
        <WrappedComponent
          identity={identity}
          setIdentity={setIdt}
          clearIdentity={clearIdt}
          {...props}
        />
      </IdentityContext.Provider>
    );
  };
  return IdentityConsumer;
};

export default withIdentity;
