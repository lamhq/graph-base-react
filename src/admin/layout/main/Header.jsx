import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Menu, Icon, Dropdown, Avatar,
} from 'antd';
import { ApolloConsumer } from 'react-apollo';

import { clearAccessToken } from '../../../common/utils/core';
import styles from './styles.less';

function logout(client) {
  client.writeData({ data: { token: null } });
  clearAccessToken();
}

const LogoutMenuItem = props => (
  <ApolloConsumer>
    {client => (
      <Menu.Item {...props} onClick={() => logout(client)}>
        <Icon type="poweroff" />
        Logout
      </Menu.Item>
    )}
  </ApolloConsumer>
);

const menu = (
  <Menu>
    <Menu.Item className={styles.headerDropdownItem}>
      <Icon type="user" />
      Profile
    </Menu.Item>
    <Menu.Divider />
    <LogoutMenuItem />
  </Menu>
);

const Header = ({ sidebarCollapsed, toggleSidebar }) => (
  <Layout.Header className={styles.header}>
    <Icon
      className={styles.trigger}
      type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={toggleSidebar}
    />
    <Dropdown
      className={styles.dropdown}
      overlay={menu}
      placement="bottomRight"
    >
      <span>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          className={styles.avatar}
        />
        Username
      </span>
    </Dropdown>
  </Layout.Header>
);

Header.propTypes = {
  sidebarCollapsed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
