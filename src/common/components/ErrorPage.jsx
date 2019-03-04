import React, { Component } from 'react';

import Raven from '../utils/sentry';

class ErrorPage extends Component {
  onReportClick = () => {
    if (Raven.lastEventId()) {
      Raven.showReportDialog();
    }
  }

  render() {
    return (
      <p>
        Something went wrong. Click
        <button type="button" onClick={this.onReportClick}>here</button>
        to report your problem.

      </p>
    );
  }
}

export default ErrorPage;
