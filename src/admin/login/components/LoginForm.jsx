import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from 'validate.js';
import { compose } from 'redux';

// @material-ui/core components
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import withStyles from '@material-ui/core/styles/withStyles';
import loginPageStyle from '../../../common/material-ui/assets/jss/material-dashboard-pro-react/views/loginPageStyle';

// core components
import TextField from '../../../common/components/TextField';

function LoginForm(props) {
  const { classes, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} id="loginForm">
      <Field
        name="email"
        labelText="Email"
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Email className={classes.inputAdornmentIcon} />
            </InputAdornment>
          ),
        }}
        component={TextField}
      />

      <Field
        name="password"
        labelText="Password"
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          type: 'password',
          endAdornment: (
            <InputAdornment position="end">
              <Icon className={classes.inputAdornmentIcon}>
                lock_outline
              </Icon>
            </InputAdornment>
          ),
        }}
        component={TextField}
      />
    </form>
  );
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default compose(
  withStyles(loginPageStyle),
  reduxForm({
    form: 'loginForm',
    enableReinitialize: true,
    validate: (data) => {
      const constraints = {
        email: {
          presence: { allowEmpty: false },
        },
        password: {
          presence: { allowEmpty: false },
        },
      };
      const errors = validate(data, constraints, { format: 'grouped' }) || {};
      return errors;
    },
  }),
)(LoginForm);
