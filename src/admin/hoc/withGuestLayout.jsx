// @flow
import * as React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import pagesStyle from '../../common/material-ui/assets/jss/material-dashboard-pro-react/layouts/authStyle';
import GridContainer from '../../common/material-ui/components/Grid/GridContainer';
import GridItem from '../../common/material-ui/components/Grid/GridItem';
import { Provider as AlertProvider, Alert } from '../../common/alert';
import login from '../../common/material-ui/assets/img/login.jpeg';

function withGuestLayout(WrappedComponent: React.ElementType) {
  type IProps = {
    classes: Object;
  };

  class GuestLayout extends React.Component<IProps> {
    componentDidMount() {
      if (document.body) {
        document.body.style.overflow = 'unset';
        document.body.style.margin = '0';
      }
    }

    getBgImage = () => login;

    render() {
      const { classes, ...rest } = this.props;
      return (
        <AlertProvider>
          <div className={classes.wrapper}>
            <Alert />
            <div
              className={classes.fullPage}
              style={{ backgroundImage: `url(${this.getBgImage()})` }}
            />
            <div className={classes.topLayer}>
              <GridContainer className={classes.container} justify="center">
                <GridItem xs={12} sm={6} md={4}>
                  <WrappedComponent {...rest} />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </AlertProvider>
      );
    }
  }
  GuestLayout.displayName = 'GuestLayout';
  return withStyles(pagesStyle)(GuestLayout);
}

export default withGuestLayout;
