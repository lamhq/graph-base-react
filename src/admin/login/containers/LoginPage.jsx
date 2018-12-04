import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { message } from 'antd';
import { Redirect } from 'react-router';

import { getErrorMessage, getSubmissionErrors, saveAccessToken } from '../../../common/utils/core';
import GuestLayout from '../../layout/guest';
import LoginForm from '../components/LoginForm';
import { loginMutation } from '../query.gql';

class LoginPage extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  state = {
    redirectToReferrer: false,
  }

  onSubmit = async (values) => {
    try {
      const data = await this.doLogin({ variables: values });
      saveAccessToken(data.login);
      this.setState({ redirectToReferrer: true });
    } catch (error) {
      message.error(getErrorMessage(error));
    }
  }

  render() {
    const { redirectToReferrer } = this.state;
    const { location } = this.props;
    const { from } = location.state || { from: { pathname: '/dashboard' } };
    if (redirectToReferrer) return <Redirect to={from} />;

    const initialValues = {
      email: 'john@mailinator.com',
      password: '',
    };
    return (
      <Mutation mutation={loginMutation}>
        {(doLogin, { data, loading, error }) => {
          this.doLogin = doLogin;
          return (
            <React.Fragment>
              <LoginForm
                initialValues={initialValues}
                onSubmit={this.onSubmit}
                loading={loading}
                errors={getSubmissionErrors(error)}
              />
            </React.Fragment>
          );
        }}
      </Mutation>
    );
  }
}

export default GuestLayout(LoginPage);
