import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

// material-ui components
import AccountCircle from '@material-ui/icons/AccountCircle';
import withStyle from '@material-ui/core/styles/withStyles';
import EditIcon from '@material-ui/icons/Edit';
import ResetIcon from '@material-ui/icons/LockRounded';
import Button from '@material-ui/core/Button';

// App commons
import styles from './ViewUserPage.styles';
import withMainLayout from '../../../hoc/withMainLayout';

// Material Components
// import Button from '../../../../common/material-ui/components/CustomButtons/Button';
import Card from '../../../../common/material-ui/components/Card/Card';
import CardBody from '../../../../common/material-ui/components/Card/CardBody';
import CardIcon from '../../../../common/material-ui/components/Card/CardIcon';
import CardHeader from '../../../../common/material-ui/components/Card/CardHeader';

function ViewUserPage({ ...props }) {
  const { classes } = props;
  return (
    <Card style={{ marginBottom: '0px' }}>
      <CardHeader color="primary" icon>
        <CardIcon color="primary">
          <AccountCircle />
        </CardIcon>
        <div className={classes.headerContainer}>
          <h4 className={classes.cardIconTitle}>Admin Details</h4>
          <div className={classes.headerActions}>
            <Button
              variant="contained"
              color="primary"
              className={classes.smallButton}
            >
              <ResetIcon className={{ root: classes.iconSmall }} />
              RESET PASSWORD
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.smallButton}
            >
              <EditIcon className={classes.iconSmall} />
              EDIT
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody />
    </Card>
  );
}

ViewUserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withMainLayout,
  withStyle(styles),
)(ViewUserPage);
