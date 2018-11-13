import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Menu, Icon, Dropdown, Button,
} from 'antd';

import styles from './styles.less';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

const Header = ({ sidebarCollapsed, toggleSidebar }) => (
  <Layout.Header className={styles.header}>
    <Icon
      className="trigger"
      type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={toggleSidebar}
    />
    <Dropdown overlay={menu} placement="bottomRight">
      <span>
        <Icon type="user" />
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
