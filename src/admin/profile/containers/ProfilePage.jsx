import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Mutation } from 'react-apollo';
import { message } from 'antd';
import { Redirect } from 'react-router';

import MainLayout from '../../layout/main';
import { getErrorMessage, getSubmissionErrors } from '../../../common/utils/core';
import { loginMutation } from '../query.gql';

class ProfilePage extends React.Component {
  render() {
    return (
      <p>test</p>
    );
  }
}

export default MainLayout(ProfilePage);
