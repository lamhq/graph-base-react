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
    logged: false,
  }

  render() {
    const { logged } = this.state;
    const { location } = this.props;
    const { from } = location.state || { from: { pathname: '/admin/profile' } };
    if (logged) return <Redirect to={from} />;

    const initialValues = {
      email: 'john@mailinator.com',
      password: '1',
    };

    return (
      <Mutation mutation={loginMutation}>
        {(doLogin, { loading, error, client }) => (
          <React.Fragment>
            <LoginForm
              initialValues={initialValues}
              onSubmit={async (values) => {
                try {
                  const resp = await doLogin({ variables: values });
                  const token = resp.data.login;
                  saveAccessToken(token);
                  client.writeData({ data: { token } });
                  this.setState({ logged: true });
                } catch (err) {
                  message.error(getErrorMessage(err));
                }
              }}
              loading={loading}
              errors={getSubmissionErrors(error)}
            />
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default GuestLayout(LoginPage);
