import React, { useState } from 'react';
import PropTypes from 'prop-types';
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
// core components
import Button from '../../../../common/material-ui/components/CustomButtons/Button';
import GridContainer from '../../../../common/material-ui/components/Grid/GridContainer';
import GridItem from '../../../../common/material-ui/components/Grid/GridItem';
import PictureUpload from '../../../../common/material-ui/components/CustomUpload/PictureUpload';
import CustomInput from '../../../../common/material-ui/components/CustomInput/CustomInput';

import modalStyle from '../../../../common/material-ui/assets/jss/material-dashboard-pro-react/modalStyle';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

function AddUserModal({ ...props }) {
  const {
 classes, open, onClose, onSubmit 
} = props;
  const [simpleSelect, handleSimple] = useState('');
  // const [modal, setModal] = useState(open);
  return (
    <div>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal,
        }}
        open={open}
        transition={Transition}
        keepMounted
        onClose={onClose}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            justIcon
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="transparent"
            onClick={onClose}
          >
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Add User</h4>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
          <PictureUpload />
          <GridContainer justify="center">
            <GridItem xs={12} sm={6}>
              <CustomInput
                // success={this.state.firstnameState === 'success'}
                // error={this.state.firstnameState === 'error'}
                labelText={<span>First Name</span>}
                id="firstname"
                formControlProps={{
                  fullWidth: true,
                }}
                // inputProps={{
                //   onChange: event => this.change(event, "firstname", "length", 3),
                //   endAdornment: (
                //     <InputAdornment
                //       position="end"
                //       className={classes.inputAdornment}
                //     >
                //       <Face className={classes.inputAdornmentIcon} />
                //     </InputAdornment>
                //   )
                // }}
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <CustomInput
                // success={this.state.lastnameState === 'success'}
                // error={this.state.lastnameState === 'error'}
                labelText={<span>Last Name</span>}
                id="lastname"
                formControlProps={{
                  fullWidth: true,
                }}
                // inputProps={{
                //   onChange: event => this.change(event, "lastname", "length", 3),
                //   endAdornment: (
                //     <InputAdornment
                //       position="end"
                //       className={classes.inputAdornment}
                //     >
                //       <RecordVoiceOver className={classes.inputAdornmentIcon} />
                //     </InputAdornment>
                //   )
                // }}
              />
            </GridItem>
            <GridItem xs={12} sm={12}>
              <CustomInput
                labelText={<span>Email</span>}
                id="email"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12}>
              <FormControl fullWidth className={classes.selectFormControl}>
                <InputLabel
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  User Role
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  value={simpleSelect}
                  onChange={event => handleSimple(event.target.value)}
                  inputProps={{
                    name: 'simpleSelect',
                    id: 'simple-select',
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
          </GridContainer>
        </DialogContent>
        <DialogActions
          className={`${classes.modalFooter} ${classes.modalFooterCenter}`}
        >
          <Button onClick={onSubmit} color="info">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddUserModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(modalStyle)(AddUserModal);
