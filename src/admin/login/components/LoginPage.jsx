import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import Email from '@material-ui/icons/Email';

// core components
import GridContainer from '../../../common/material-ui/components/Grid/GridContainer';
import GridItem from '../../../common/material-ui/components/Grid/GridItem';
import CustomInput from '../../../common/material-ui/components/CustomInput/CustomInput';
import Button from '../../../common/material-ui/components/CustomButtons/Button';
import Card from '../../../common/material-ui/components/Card/Card';
import CardBody from '../../../common/material-ui/components/Card/CardBody';
import CardHeader from '../../../common/material-ui/components/Card/CardHeader';
import CardFooter from '../../../common/material-ui/components/Card/CardFooter';
import loginPageStyle from '../../../common/material-ui/assets/jss/material-dashboard-pro-react/views/loginPageStyle';
import { withGuestLayout } from '../../hoc';

function LoginPage(props) {
  const [cardAnimaton, setCardAnimaton] = useState('cardHidden');
  const { classes } = props;
  let timer;

  useEffect(() => {
    timer = setTimeout(
      () => setCardAnimaton(''),
      700,
    );

    return () => {
      clearTimeout(timer);
      timer = null;
    };
  });

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="rose"
              >
                <h4 className={classes.cardTitle}>Log in</h4>
              </CardHeader>
              <CardBody>
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
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button color="rose" simple size="lg" block>
                  Let's Go
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withGuestLayout,
  withStyles(loginPageStyle),
)(LoginPage);
