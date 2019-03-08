import React, { useContext } from 'react';
import IdentityContext from './context';

const withIdentity = name => (WrappedComponent) => {
  const IdentityConsumer = (props) => {
    const { identities, setIdentity, clearIdentity } = useContext(IdentityContext);
    const identity = identities[name] ? identities[name] : null;
    const setIdt = (data, token) => setIdentity(name, data, token);
    const clearIdt = () => clearIdentity(name);
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
