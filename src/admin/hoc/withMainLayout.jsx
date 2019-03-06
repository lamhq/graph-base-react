// @flow

/* eslint-disable react/no-string-refs */
import * as React from 'react';
import cx from 'classnames';
import { compose } from 'redux';

import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountIcon from '@material-ui/icons/AccountBox';

// core components
import appStyle from '../../common/material-ui/assets/jss/material-dashboard-pro-react/layouts/adminStyle';
import sidebarImage from '../../common/material-ui/assets/img/sidebar-2.jpg';
import logo from '../../common/material-ui/assets/img/logo-white.svg';
import AdminNavbar from '../../common/material-ui/components/Navbars/AdminNavbar';
import Footer from '../../common/material-ui/components/Footer/Footer';
import Sidebar from '../../common/material-ui/components/Sidebar/Sidebar';

import '../../common/material-ui/assets/scss/material-dashboard-pro-react.scss';

let ps;
const menuItems: Array<any> = [
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    collapse: true,
    name: 'Accounts',
    icon: AccountIcon,
    state: 'userCollapse',
    views: [
      {
        path: '/admin/users',
        name: 'Admin',
      },
    ],
  },
];

function withMainLayout(WrappedComponent: React.ElementType) {
  interface IProps {
    classes: Object;
    history: RouterHistory;
    location: any;
  }

  interface IState {
    mobileOpen: boolean;
    miniActive: boolean;
    image: any;
    color: 'blue';
    bgColor: 'black';
  }

  class MainLayout extends React.Component<IProps, IState> {
    state = {
      mobileOpen: false,
      miniActive: false,
      image: sidebarImage,
      color: 'blue',
      bgColor: 'black',
    }

    componentDidMount() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps = new PerfectScrollbar(this.refs.mainPanel, {
          suppressScrollX: true,
          suppressScrollY: false,
        });
        if (document.body) {
          document.body.style.overflow = 'hidden';
        }
      }
      window.addEventListener('resize', this.resizeFunction.bind(this));
    }

    componentDidUpdate(e: IProps) {
      if (e.history.location.pathname !== e.location.pathname) {
        this.refs.mainPanel.scrollTop = 0;
        this.setMobileFlag();
      }
    }

    componentWillUnmount() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', this.resizeFunction.bind(this));
    }

    /**
     * called in componentDidUpdate
     */
    setMobileFlag() {
      const { mobileOpen } = this.state;
      if (mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }

    getActiveRoute = (routes) => {
      const activeRoute = 'Default Brand Text';
      for (let i = 0; i < routes.length; i += 1) {
        if (routes[i].collapse) {
          const collapseActiveRoute = this.getActiveRoute(routes[i].views);
          if (collapseActiveRoute !== activeRoute) {
            return collapseActiveRoute;
          }
        } else if (
          window.location.href.indexOf(routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
      return activeRoute;
    };

    handleDrawerToggle = () => {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    sidebarMinimize() {
      this.setState(state => ({ miniActive: !state.miniActive }));
    }

    resizeFunction() {
      if (window.innerWidth >= 960) {
        this.setState({ mobileOpen: false });
      }
    }

    render() {
      const { classes, ...rest } = this.props;
      const {
        miniActive, mobileOpen, color, bgColor, image,
      } = this.state;
      const mainPanel = `${classes.mainPanel
      } ${
        cx({
          [classes.mainPanelSidebarMini]: miniActive,
          [classes.mainPanelWithPerfectScrollbar]:
            navigator.platform.indexOf('Win') > -1,
        })}`;
      return (
        <div className={classes.wrapper}>
          <Sidebar
            routes={menuItems}
            logoText="Creative Tim"
            logo={logo}
            image={image}
            handleDrawerToggle={this.handleDrawerToggle}
            open={mobileOpen}
            color={color}
            bgColor={bgColor}
            miniActive={miniActive}
            {...rest}
          />

          <div className={mainPanel} ref="mainPanel">
            <AdminNavbar
              sidebarMinimize={this.sidebarMinimize}
              miniActive={miniActive}
              brandText={this.getActiveRoute(menuItems)}
              handleDrawerToggle={this.handleDrawerToggle}
              {...rest}
            />

            <div className={classes.content}>
              <div className={classes.container}>
                <WrappedComponent {...rest} />
              </div>
            </div>

            {<Footer fluid />}
          </div>
        </div>
      );
    }
  }

  MainLayout.displayName = 'MainLayout';
  return compose(
    withRouter,
    withStyles(appStyle),
  )(MainLayout);
}
export default withMainLayout;
