// @flow
/* eslint comma-dangle: 0 */

import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SweetAlert from 'react-bootstrap-sweetalert';

import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';

import Card from '../../../common/material-ui/components/Card/Card';
import CardBody from '../../../common/material-ui/components/Card/CardBody';
import CardHeader from '../../../common/material-ui/components/Card/CardHeader';
import CustomInput from '../../../common/material-ui/components/CustomInput/CustomInput';
import Button from '../../../common/material-ui/components/CustomButtons/Button';

import { withGuestLayout } from '../../hoc';

import { IBaseProps } from '../../../common/types';

import styles from './styles';

interface IProps extends IBaseProps { }

function ForgotPasswordPage(props: IProps) {
  const [cardAnimation, setCardAnimation] = React.useState('cardHidden');
  const [alert, setAlert] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(
      () => setCardAnimation(''),
      700,
    );

    return () => {
      clearTimeout(timer);
    };
  });

  function hideAlert() {
    setAlert(null);
  }

  function handleSendResetPassword() {
    const { classes } = props;
    setAlert(
      <SweetAlert
        success
        style={{ display: 'block', marginTop: '-180px', height: '360px' }}
        title="Sent"
        onConfirm={() => hideAlert()}
        confirmBtnText="Login"
        confirmBtnCssClass={classes.loginButton}
      >
        Please check your email to reset your password
      </SweetAlert>
    );
  }

  const { classes } = props;
  return (
    <form>
      <Card login className={classes[cardAnimation]}>
        <CardHeader
          className={`${classes.cardHeader} ${classes.textCenter}`}
          color="primary"
        >
          <div className={classes.socialLine}>
            <Button
              justIcon
              round
              color="#000"
              className={classes.goBackButton}
            >
              <i className="fab material-icons">arrow_back</i>
            </Button>
          </div>
          <h4 className={classes.cardTitle}>Forgot Password</h4>
        </CardHeader>
        <CardBody className={classes.cardBody}>
          <CustomInput
            labelText="Email"
            id="email"
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
          />
          <Button
            color="success"
            className={`${classes.marginRight} ${classes.resetButton}`}
            onClick={handleSendResetPassword}
          >
            Reset Password
          </Button>
        </CardBody>
      </Card>
      {alert}
    </form>
  );
}

export default withGuestLayout(withStyles(styles)(ForgotPasswordPage));
