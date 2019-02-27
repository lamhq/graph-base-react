import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router';

import { getSubmissionErrors, saveAccessToken } from '../../../common/utils/core';
import GuestLayout from '../../layout/guest';
import LoginForm from '../components/LoginForm';
import { loginMutation } from '../query.gql';

class LoginPage extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    mutation: PropTypes.func.isRequired,
    result: PropTypes.object.isRequired,
  }

  state = {
    logged: false,
  }

  handleSubmit = async (values) => {
    const { mutation: login, result: { client } } = this.props;
    const resp = await login({ variables: values });
    const token = resp.data.login;
    saveAccessToken(token);
    client.writeData({ data: { token } });
    this.setState({ logged: true });
  }

  render() {
    const { location, result: { loading, error } } = this.props;
    const { logged } = this.state;
    const { from } = location.state || { from: { pathname: '/admin/profile' } };
    if (logged) return <Redirect to={from} />;
    if (error) {
      console.log('1111');
      console.log(error);
    }
    const initialValues = {
      email: 'john@mailinator.com',
      password: '1',
    };

    return (
      <LoginForm
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        loading={loading}
        errors={getSubmissionErrors(error)}
      />
    );
  }
}

const Wrapper = props => (
  <Mutation mutation={loginMutation}>
    {(mutation, result) => (
      <LoginPage mutation={mutation} result={result} {...props} />
    )}
  </Mutation>
);

export default GuestLayout(Wrapper);
