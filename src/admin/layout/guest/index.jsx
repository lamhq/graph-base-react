import React from 'react';
import { Row, Col } from 'antd';
import { compose } from 'redux';

import styles from './styles.less';
import logo from '../../../assets/logo.svg';
import config from '../../../config';
import { handleError } from '../../../common/hoc';

function GuestLayout(WrappedComponent) {
  const Wrapper = props => (
    <Row type="flex" align="middle">
      <Col
        lg={{ span: 8, offset: 8 }}
        md={{ span: 10, offset: 7 }}
        sm={{ span: 16, offset: 4 }}
        xs={{ span: 22, offset: 1 }}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <img alt="logo" src={logo} />
            <span>{config.appName}</span>
          </div>
          <WrappedComponent {...props} />
        </div>
      </Col>
    </Row>
  );

  Wrapper.displayName = 'GuestLayout';
  return Wrapper;
}

export default compose(
  GuestLayout,
  handleError,
);
