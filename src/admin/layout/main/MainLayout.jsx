import React, { Component } from 'react';
import { Layout } from 'antd';
import { compose } from 'redux';

import Header from './Header';
import Sidebar from './Sidebar';
import ErrorPage from '../../error';
import { LoginRequired, ErrorBoundary } from '../../../common/hoc';

function MainLayout(WrappedComponent) {
  class Wrapper extends Component {
    state = {
      sidebarCollapsed: false,
    }

    toggleSidebar = () => {
      this.setState(prevState => ({
        ...prevState,
        sidebarCollapsed: !prevState.sidebarCollapsed,
      }));
    }

    render() {
      const { sidebarCollapsed } = this.state;
      return (
        <Layout>
          <Sidebar collapsed={sidebarCollapsed} />
          <Layout>
            <Header toggleSidebar={this.toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
            <WrappedComponent />
          </Layout>
        </Layout>
      );
    }
  }

  Wrapper.displayName = 'MainLayout';
  return Wrapper;
}

export default compose(
  LoginRequired('/admin/login'),
  MainLayout,
  ErrorBoundary(ErrorPage),
);
