import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import {
  Button, Form, Input, Checkbox, Icon, Row, Col,
} from 'antd';
import Layout from '../../layout/guest';

const FormItem = Form.Item;

class LoginPage extends Component {
  propTypes = {
    form: PropTypes.object,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: '#1890ff' }} />} placeholder="Email" />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: '#1890ff' }} />} type="password" placeholder="Password" />,
          )}
        </FormItem>
        <FormItem>
          <Row>
            <Col span={12}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>,
              )}
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <a className="login-form-forgot" href="">Forgot password</a>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default compose(
  Layout,
  Form.create(),
)(LoginPage);
