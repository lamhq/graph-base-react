import React from 'react';
import PropTypes from 'prop-types';

function withReduxField(WrappedComponent) {
  const ReduxFormField = (props) => {
    const {
      input,
      meta: { touched, error },
      inputProps,
      ...rest
    } = props;
    const hasError = !!(touched && error);
    const helpText = hasError ? error : null;
    const inputProps2 = {
      ...input,
      ...inputProps,
    };
    return (
      <WrappedComponent error={hasError} helpText={helpText} inputProps={inputProps2} {...rest} />
    );
  };

  ReduxFormField.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
  };

  return ReduxFormField;
}

export default withReduxField;
