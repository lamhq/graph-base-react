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
import GridContainer from '../../../../common/material-ui/components/Grid/GridContainer';
import GridItem from '../../../../common/material-ui/components/Grid/GridItem';

// Custom components
import StatusBadge from '../../list/components/StatusBadge';

function ViewUserPage({ ...props }) {
  const { classes } = props;
  return (
    <Card>
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
              <ResetIcon />
              RESET PASSWORD
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.smallButton}
            >
              <EditIcon />
              EDIT
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <GridContainer justify="left" spacing={50}>
          <GridItem xs={3} sm={3} className={classes.userInfo}>
            <label>First Name</label>
            <div className="info">An</div>
          </GridItem>
          <GridItem xs={3} sm={3} className={classes.userInfo}>
            <label>Last Name</label>
            <div className="info">Tran</div>
          </GridItem>
          <GridItem xs={6} sm={6} className={classes.userInfo}>
            <label>User Role</label>
            <div className="info">Admin</div>
          </GridItem>
          <GridItem xs={6} sm={6} className={classes.userInfo}>
            <label>Email</label>
            <div className="info">antran@theappteam.com.au</div>
          </GridItem>
          <GridItem xs={3} sm={3} className={classes.userInfo}>
            <label>Created on</label>
            <div className="info">22 Jul 2018</div>
          </GridItem>
          <GridItem xs={3} sm={3} className={classes.userInfo}>
            <label>Last Updated on</label>
            <div className="info">22 Jul 2018</div>
          </GridItem>
          <GridItem xs={6} sm={6} className={classes.userInfo}>
            <label>Status</label>
            <StatusBadge label="Active" />
          </GridItem>
        </GridContainer>
      </CardBody>
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
