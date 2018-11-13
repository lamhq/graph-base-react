import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';

import logo from '../../../assets/logo.svg';
import config from '../../../config';
import styles from './styles.less';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => (
  <Sider
    theme="light"
    trigger={null}
    collapsible
    collapsed={collapsed}
  >
    <div className={styles.logo}>
      <img src={logo} alt="" />
      {!collapsed && <span>{config.appName}</span>}
    </div>
    <Menu mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Icon type="user" />
        <span>nav 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span>nav 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span>nav 3</span>
      </Menu.Item>
      <Menu.SubMenu
        key="sub1"
        title={(
          <span>
            <Icon type="user" />
            <span>User</span>
          </span>
        )}
      >
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </Sider>
);

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
