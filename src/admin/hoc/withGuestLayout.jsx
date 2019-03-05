import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import pagesStyle from '../../common/material-ui/assets/jss/material-dashboard-pro-react/layouts/authStyle';
import login from '../../common/material-ui/assets/img/login.jpeg';
import GridContainer from '../../common/material-ui/components/Grid/GridContainer';

function withGuestLayout(WrappedComponent) {
  @withStyles(pagesStyle)
  class GuestLayout extends React.Component {
    static propTypes = {
      classes: PropTypes.object.isRequired,
    }

    componentDidMount() {
      document.body.style.overflow = 'unset';
      document.body.style.margin = '0';
    }

    getBgImage = () => login;

    render() {
      const { classes, ...rest } = this.props;
      return (
        <div>
          <div className={classes.wrapper}>
            <div
              className={classes.fullPage}
              style={{ backgroundImage: `url(${this.getBgImage()})` }}
            />
            <div className={classes.topLayer}>
              <GridContainer className={classes.container} justify="center">
                <WrappedComponent {...rest} />
              </GridContainer>
            </div>
          </div>
        </div>
      );
    }
  }
  GuestLayout.displayName = 'GuestLayout';
  return GuestLayout;
}

export default withGuestLayout;
