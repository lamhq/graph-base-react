import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IdentityContext from './context';

function Provider({ children }) {
  const [state, setState] = useState({});

  function setIdentity(name, data, token) {
    setState({
      ...state,
      [name]: { data, token },
    });
  }

  function clearIdentity(name) {
    const data = { ...state };
    delete data[name];
    setState(data);
  }

  const context = {
    identities: state,
    clearIdentity,
    setIdentity,
  };

  return (
    <IdentityContext.Provider value={context}>
      {children}
    </IdentityContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
