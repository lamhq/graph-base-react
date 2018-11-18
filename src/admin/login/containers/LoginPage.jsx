import React from 'react';
import WrappedRegistrationForm from '../test';

class ContainerForm extends React.Component {
  state = {
    loading: false,
    errors: {},
  }

  onSubmit = (values, form) => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        loading: false,
        errors: {
          email: ['Email already existed'],
          password: ['Password is so weak'],
        },
      });
    }, 1000);
  }

  render() {
    const data = {
      email: 'abc@m.mm',
      password: '1',
      confirmPassword: '1',
      prefix: '87',
      phone: '123456',
    };
    const { loading, errors } = this.state;

    return (
      <WrappedRegistrationForm
        initialValues={data}
        onSubmit={this.onSubmit}
        loading={loading}
        errors={errors}
      />
    );
  }
}

export default ContainerForm;
