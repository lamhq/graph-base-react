import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'redux';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import GridItem from '../../../common/material-ui/components/Grid/GridItem';
import Card from '../../../common/material-ui/components/Card/Card';
import CardBody from '../../../common/material-ui/components/Card/CardBody';
import CardHeader from '../../../common/material-ui/components/Card/CardHeader';
import CardFooter from '../../../common/material-ui/components/Card/CardFooter';
import Button from '../../../common/material-ui/components/CustomButtons/Button';
import LoginForm from './LoginForm';

import loginPageStyle from '../../../common/material-ui/assets/jss/material-dashboard-pro-react/views/loginPageStyle';
import { withGuestLayout } from '../../hoc';

function LoginPage(props) {
  const [cardAnimaton, setCardAnimaton] = useState('cardHidden');
  const { classes, login } = props;

  useEffect(() => {
    const timer = setTimeout(
      () => setCardAnimaton(''),
      700,
    );

    return () => {
      clearTimeout(timer);
    };
  });

  function handleSubmit(values) {
    console.log(values);
    login(values);
  }

  return (
    <GridItem xs={12} sm={6} md={4}>
      <Card login className={classes[cardAnimaton]}>
        <CardHeader
          className={`${classes.cardHeader} ${classes.textCenter}`}
          color="rose"
        >
          <h4 className={classes.cardTitle}>Log in</h4>
        </CardHeader>
        <CardBody>
          <LoginForm onSubmit={handleSubmit} />
        </CardBody>
        <CardFooter className={classes.justifyContentCenter}>
          <Button type="submit" form="loginForm" color="rose" simple size="lg" block>
            Login
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default compose(
  withGuestLayout,
  withStyles(loginPageStyle),
  graphql(
    gql`
      mutation login($email: String, $password: String){
        login(email: $email, password: $password) {
          value
        }
      }
    `,
    {
      props: data => ({
        login: data.mutate,
        ...data,
      }),
    },
  ),
)(LoginPage);
