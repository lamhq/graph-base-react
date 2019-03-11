import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { SubmissionError } from 'redux-form';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import Card from '../../../common/material-ui/components/Card/Card';
import CardBody from '../../../common/material-ui/components/Card/CardBody';
import CardHeader from '../../../common/material-ui/components/Card/CardHeader';
import CardFooter from '../../../common/material-ui/components/Card/CardFooter';
import Button from '../../../common/material-ui/components/CustomButtons/Button';
import LoginForm from './LoginForm';

import loginPageStyle from '../../../common/material-ui/assets/jss/material-dashboard-pro-react/views/loginPageStyle';
import { withGuestLayout } from '../../hoc';
import { withIdentity } from '../../../common/identity';

function LoginPage(props) {
  const [cardAnimaton, setCardAnimaton] = useState('cardHidden');
  const [redirectToReferrer, setRedirect] = useState(false);
  const {
    classes, mutate, setIdentity, location,
  } = props;

  useEffect(() => {
    const timer = setTimeout(
      () => setCardAnimaton(''),
      700,
    );

    return () => {
      clearTimeout(timer);
    };
  });

  async function handleSubmit(values) {
    try {
      const resp = await mutate({ variables: values });
      const data = resp.data.login;
      setIdentity(data.user, { value: data.value, expireAt: data.expireAt });
      setRedirect(true);
    } catch (error) {
      // if form submission error
      throw new SubmissionError({
        email: 'Email is invalid',
        password: 'Password is wrong',
        _error: error.message,
      });
    }
  }

  const { from } = location.state || { from: { pathname: '/' } };
  if (redirectToReferrer) return <Redirect to={from} />;

  return (
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
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
  setIdentity: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default compose(
  withGuestLayout,
  withStyles(loginPageStyle),
  withIdentity('admin'),
  withRouter,
  graphql(
    gql`
      mutation login($email: String, $password: String){
        login(email: $email, password: $password) {
          value
          expireAt
          user {
            id
            email
            firstname
            lastname
          }
        }
      }
    `,
  ),
)(LoginPage);
