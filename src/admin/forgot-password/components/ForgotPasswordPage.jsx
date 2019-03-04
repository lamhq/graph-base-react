import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';

import GridItem from '../../../common/material-ui/components/Grid/GridItem';
import Card from '../../../common/material-ui/components/Card/Card';
import CardBody from '../../../common/material-ui/components/Card/CardBody';
import CardHeader from '../../../common/material-ui/components/Card/CardHeader';
import CustomInput from '../../../common/material-ui/components/CustomInput/CustomInput';
import Button from '../../../common/material-ui/components/CustomButtons/Button';

import { withGuestLayout } from '../../hoc';

import styles from './styles';

/* eslint space-before-function-paren:0 */
/* eslint prefer-arrow-callback:0 */
/* eslint func-names:0 */

class ForgotPasswordPage extends React.PureComponent {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: '' });
      }.bind(this),
      700,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }

  render() {
    const { classes } = this.props;
    const { cardAnimaton } = this.state;
    return (
      <GridItem xs={12} sm={6} md={4}>
        <form>
          <Card login className={classes[cardAnimaton]}>
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
                labelText="Email..."
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
              <Button color="success" className={`${classes.marginRight} ${classes.resetButton}`}>
                Reset Password
              </Button>
            </CardBody>
          </Card>
        </form>
      </GridItem>
    );
  }
}

ForgotPasswordPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withGuestLayout(withStyles(styles)(ForgotPasswordPage));
