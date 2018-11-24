import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Input, Checkbox, Icon, Row, Col,
} from 'antd';

import antForm from '../../../common/hoc/antForm';

const FormItem = Form.Item;

const LoginForm = (props) => {
  const { form: { getFieldDecorator }, loading, onSubmit } = props;
  return (
    <Form onSubmit={onSubmit}>
      <FormItem>
        {getFieldDecorator('email', {
          validateTrigger: 'onBlur',
          rules: [{ required: true, message: 'Please input your email' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: '#1890ff' }} />} placeholder="Email" />,
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          validateTrigger: 'onBlur',
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
            })(
              <Checkbox>Remember me</Checkbox>,
            )}
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <a className="login-form-forgot" href="#">Forgot password</a>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit" loading={loading}>
          Log in
        </Button>
      </FormItem>
    </Form>
  );
};

LoginForm.defaultProps = {
  loading: false,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

export default antForm(LoginForm);
