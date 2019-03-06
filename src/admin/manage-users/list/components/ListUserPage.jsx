import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

// material-ui components
import Assignment from '@material-ui/icons/Assignment';
import withStyle from '@material-ui/core/styles/withStyles';
import AddIcon from '@material-ui/icons/AddSharp';

// App commons
import './ListUserPage.scss';
import withMainLayout from '../../../hoc/withMainLayout';

// Material Components
import Table from '../../../../common/material-ui/components/Table/Table';
import Button from '../../../../common/material-ui/components/CustomButtons/Button';
import extendedTablesStyle from '../../../../common/material-ui/assets/jss/material-dashboard-pro-react/views/extendedTablesStyle';
import Card from '../../../../common/material-ui/components/Card/Card';
import CardBody from '../../../../common/material-ui/components/Card/CardBody';
import CardIcon from '../../../../common/material-ui/components/Card/CardIcon';
import CardHeader from '../../../../common/material-ui/components/Card/CardHeader';
import Paginations from '../../../../common/material-ui/components/Pagination/Pagination';

// Custom components
import StatusBadge from './StatusButton/StatusBadge';
import AddUserModal from '../../add/index';

const TABLE_HEAD = ['First Name', 'Last Name', 'Email', 'User Role', 'Status'];
const DUMMY_DATA = [
  [
    'Maud',
    'Hudson',
    'email@gmail.com',
    'Admin',
    <StatusBadge label="Suspended" />,
  ],
  ['An', 'Tran', 'antran@gmail.com', 'User', <StatusBadge label="Active" />],
  [
    'Trinh',
    'Nguyen',
    'trinhnguyen@gmail.com',
    'User',
    <StatusBadge label="Inactive" />,
  ],
  [
    'Lam',
    'Huynh',
    'lamhuynh@gmail.com',
    'User',
    <StatusBadge label="Pending" />,
  ],
  [
    'Calvin',
    'Lawrence',
    'calvin@gmail.com',
    'User',
    <StatusBadge label="Suspended" />,
  ],
];

function ListUserPage({ ...props }) {
  const { classes } = props;
  const [isOpenModal, toggleModal] = useState(false);
  return (
    <div>
      <AddUserModal
        open={isOpenModal}
        onClose={() => toggleModal(!isOpenModal)}
      />
      <div className="flex-end">
        <Button
          style={{ backgroundColor: '#2ac1a8' }}
          onClick={() => toggleModal(true)}
        >
          <AddIcon />
          ADD
        </Button>
      </div>
      ,
      <Card style={{ marginBottom: '0px' }}>
        <CardHeader color="rose" icon>
          <CardIcon color="rose">
            <Assignment />
          </CardIcon>
          <h4 className={classes.cardIconTitle}>Admin Accounts</h4>
        </CardHeader>
        <CardBody>
          <Table
            tableHead={TABLE_HEAD}
            tableData={DUMMY_DATA}
            customCellClasses={[classes.center]}
            // 4 is for classes.center
            customClassesForCells={[4]}
            customHeadCellClasses={[classes.center]}
            // 4 is for classes.center
            customHeadClassesForCells={[4]}
          />
        </CardBody>
      </Card>
      <div className="flex-end">
        <Paginations
          pages={[
            { text: 'PREV' },
            { text: 1 },
            { text: 2 },
            { active: true, text: 3 },
            { text: 4 },
            { text: 5 },
            { text: 'NEXT' },
          ]}
          color="info"
        />
      </div>
    </div>
  );
}

ListUserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default compose(
  withMainLayout,
  withStyle(extendedTablesStyle),
)(ListUserPage);
