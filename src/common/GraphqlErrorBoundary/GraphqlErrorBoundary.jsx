// @flow
/* eslint react/no-did-update-set-state: 0 */

import React from 'react';
import type { Node } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import SweetAlert from 'react-bootstrap-sweetalert';

import * as actions from './actions';
import { IGraphQLErrors, IBaseProps } from '../types';

import styles from './styles';

interface IState {
  alert?: Node;
}

interface IProps extends IBaseProps {
  children: Object;
  error: IGraphQLErrors;
  createGraphqlErrorBoundary: typeof actions.createGraphqlErrorBoundary;
}

class GraphqlErrorBoundary extends React.Component<IProps, IState> {
  state: IState = {}

  componentDidUpdate() {
    const { error, classes } = this.props;
    const { alert } = this.state;
    if (error && !alert) {
      if (error.networkError) { // Handle net work error
        if (error.networkError.statusCode === 401) {
          // handle logout
        } else {
          this.setState({
            alert: (
              <SweetAlert
                error
                style={{ display: 'block', marginTop: '-180px', height: '360px' }}
                title="Error!"
                onConfirm={() => this.handleRetry()}
                confirmBtnText="Retry"
                confirmBtnCssClass={classes.retryButton}
              >
                Something went wrong!
              </SweetAlert>
            ),
          });
        }
      }
    }
  }

  handleRetry() {
    const { createGraphqlErrorBoundary } = this.props;
    this.setState({
      alert: null,
    }, () => {
      createGraphqlErrorBoundary(null);
    });
  }

  render() {
    const { children } = this.props;
    const { alert } = this.state;
    return (
      <React.Fragment>
        {children}
        {alert}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.graphQLError.error,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(GraphqlErrorBoundary);
