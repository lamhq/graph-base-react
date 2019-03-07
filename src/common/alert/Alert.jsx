import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import AlertContext from './context';
import AlertContent from './AlertContent';
import { alertStyle } from './styles';

function Alert() {
  const { data: { open, type, message }, hideAlert } = useContext(AlertContext);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={3000}
      onClose={hideAlert}
    >
      <AlertContent
        onClose={hideAlert}
        variant={type}
        message={message}
      />
    </Snackbar>
  );
}

export default withStyles(alertStyle)(Alert);
