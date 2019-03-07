import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

// material-ui components
import AccountCircle from '@material-ui/icons/AccountCircle';
import withStyle from '@material-ui/core/styles/withStyles';
import CheckIcon from '@material-ui/icons/Check';
import RemoveIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// App commons
import styles from './EditUserPage.styles';
import withMainLayout from '../../../hoc/withMainLayout';

// Material Components
// import Button from '../../../../common/material-ui/components/CustomButtons/Button';
import Card from '../../../../common/material-ui/components/Card/Card';
import CardBody from '../../../../common/material-ui/components/Card/CardBody';
import CardIcon from '../../../../common/material-ui/components/Card/CardIcon';
import CardHeader from '../../../../common/material-ui/components/Card/CardHeader';
import GridContainer from '../../../../common/material-ui/components/Grid/GridContainer';
import GridItem from '../../../../common/material-ui/components/Grid/GridItem';
import CustomInput from '../../../../common/material-ui/components/CustomInput/CustomInput';

function EditUserPage({ ...props }) {
  const { classes } = props;
  const [userRole, setUserRole] = useState('2');
  const [status, setStatus] = useState('2');
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
              variant="outlined"
              color="primary"
              className={classes.smallButton}
            >
              <RemoveIcon />
              CANCEL
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.smallButton}
            >
              <CheckIcon />
              SAVE
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <GridContainer justify="left" spacing={50}>
          <GridItem xs={3} sm={3} className={classes.userInfo}>
            <label>First Name</label>
            <CustomInput
              id="firstname"
              formControlProps={{
                className: classes.formControl,
                fullWidth: true,
              }}
              inputProps={{ defaultValue: 'An' }}
            />
          </GridItem>
          <GridItem xs={3} sm={3} className={classes.userInfo}>
            <label>Last Name</label>
            <CustomInput
              id="lastname"
              formControlProps={{
                className: classes.formControl,
                fullWidth: true,
              }}
              inputProps={{ defaultValue: 'Tran' }}
            />
          </GridItem>
          <GridItem xs={6} sm={6} className={classes.userInfo}>
            <label>User Role</label>
            <FormControl fullWidth className={classes.selectFormControl}>
              <Select
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                value={userRole}
                onChange={event => setUserRole(event.target.value)}
                inputProps={{
                  name: 'userRole',
                  id: 'user-role',
                }}
              >
                <MenuItem
                  disabled
                  classes={{
                    root: classes.selectMenuItem,
                  }}
                >
                  User Role
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="2"
                >
                  Admin
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
                  User
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="4"
                >
                  Guest
                </MenuItem>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem xs={6} sm={6} className={classes.userInfo}>
            <label>Email</label>
            <CustomInput
              id="email"
              formControlProps={{
                className: classes.formControl,
                fullWidth: true,
              }}
              inputProps={{ defaultValue: 'antran@theappteam.com.au' }}
            />
          </GridItem>
          <GridItem xs={3} sm={3} className={classes.userInfo}>
            <label>Created on</label>
            <CustomInput
              id="createdon"
              formControlProps={{
                className: classes.formControl,
                fullWidth: true,
              }}
              inputProps={{ defaultValue: '22 Jul 2018' }}
            />
          </GridItem>
          <GridItem xs={3} sm={3} className={classes.userInfo}>
            <label>Last Updated on</label>
            <CustomInput
              id="lastupdatedon"
              formControlProps={{
                className: classes.formControl,
                fullWidth: true,
              }}
              inputProps={{ defaultValue: '22 Jul 2018' }}
            />
          </GridItem>
          <GridItem xs={6} sm={6} className={classes.userInfo}>
            <label>Status</label>
            <FormControl fullWidth className={classes.selectFormControl}>
              <Select
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                value={status}
                onChange={event => setStatus(event.target.value)}
                inputProps={{
                  name: 'status',
                  id: 'status',
                }}
              >
                <MenuItem
                  disabled
                  classes={{
                    root: classes.selectMenuItem,
                  }}
                >
                  Status
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="2"
                >
                  Active
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
                  Inactive
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="4"
                >
                  Pending
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="4"
                >
                  Suspended
                </MenuItem>
              </Select>
            </FormControl>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}

EditUserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withMainLayout,
  withStyle(styles),
)(EditUserPage);
