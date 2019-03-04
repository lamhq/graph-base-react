/* eslint-disable react/no-string-refs */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import '../../common/material-ui/assets/scss/material-dashboard-pro-react.scss';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import appStyle from '../../common/material-ui/assets/jss/material-dashboard-pro-react/layouts/adminStyle';
import sidebarImage from '../../common/material-ui/assets/img/sidebar-2.jpg';
import logo from '../../common/material-ui/assets/img/logo-white.svg';
import AdminNavbar from '../../common/material-ui/components/Navbars/AdminNavbar';
import Footer from '../../common/material-ui/components/Footer/Footer';
import Sidebar from '../../common/material-ui/components/Sidebar/Sidebar';

let ps;

function withMainLayout(WrappedComponent) {
  class MainLayout extends React.Component {
    static propTypes = {
      classes: PropTypes.object.isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        mobileOpen: false,
        miniActive: false,
        image: sidebarImage,
        color: 'blue',
        bgColor: 'black',
      };
      this.resizeFunction = this.resizeFunction.bind(this);
      this.sidebarMinimize = this.sidebarMinimize.bind(this);
    }

    componentDidMount() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps = new PerfectScrollbar(this.refs.mainPanel, {
          suppressScrollX: true,
          suppressScrollY: false,
        });
        document.body.style.overflow = 'hidden';
      }
      window.addEventListener('resize', this.resizeFunction);
    }

    componentDidUpdate(e) {
      if (e.history.location.pathname !== e.location.pathname) {
        this.refs.mainPanel.scrollTop = 0;
        this.setMobileFlag();
      }
    }

    componentWillUnmount() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', this.resizeFunction);
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
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
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
            routes={[]}
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
              brandText="Test"
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
  return withStyles(appStyle)(MainLayout);
}
export default withMainLayout;
