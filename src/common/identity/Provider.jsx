import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IdentitiesContext } from './contexts';
import { saveIdentity, loadIdentity } from './utils';

function Provider({ children }) {
  const [state, setState] = useState(loadIdentity());

  function setIdentity(name, data, token) {
    const newState = {
      ...state,
      [name]: { data, token },
    };
    setState(newState);
    saveIdentity(newState);
  }

  function clearIdentity(name) {
    const newState = { ...state };
    delete newState[name];
    setState(newState);
    saveIdentity(newState);
  }

  const context = {
    identities: state,
    clearIdentity,
    setIdentity,
  };

  return (
    <IdentitiesContext.Provider value={context}>
      {children}
    </IdentitiesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
