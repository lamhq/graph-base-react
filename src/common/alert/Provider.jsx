import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AlertContext from './context';

function Provider({ children }) {
  const [data, setData] = useState({ open: false, type: 'success', message: '' });

  function hideAlert() {
    setData({
      ...data,
      open: false,
    });
  }

  function showError(message) {
    setData({
      type: 'error',
      open: true,
      message,
    });
  }

  function showSuccess(message) {
    setData({
      type: 'success',
      open: true,
      message,
    });
  }

  const context = {
    data,
    showError,
    showSuccess,
    hideAlert,
  };

  return (
    <AlertContext.Provider value={context}>
      {children}
    </AlertContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
