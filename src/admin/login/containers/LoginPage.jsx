import React from 'react';
// import gql from 'graphql-tag';
// import { Mutation } from 'react-apollo';

import GuestLayout from '../../layout/guest';
import LoginForm from '../components/LoginForm';

// const ADD_TODO = gql`
//   mutation AddTodo($type: String!) {
//     addTodo(type: $type) {
//       id
//       type
//     }
//   }
// `;

class LoginPage extends React.Component {
  state = {
    loading: false,
    errors: {},
  }

  onSubmit = (values) => {
    console.log(values);
  }

  render() {
    const data = {
      email: '',
      password: '',
      remember: true,
    };
    const { loading, errors } = this.state;

    return (
      <LoginForm
        initialValues={data}
        onSubmit={this.onSubmit}
        loading={loading}
        errors={errors}
      />
    );
  }
}

export default GuestLayout(LoginPage);
