import React from 'react';
import PropTypes from 'prop-types';
import './StatusButton.scss';

// Status
const STATUS = {
  Suspended: {
    label: 'Suspended',
    className: 'suspended',
  },
  Active: {
    label: 'Active',
    className: 'active',
  },
  Inactive: {
    label: 'Inactive',
    className: 'inactive',
  },
  Pending: {
    label: 'Pending',
    className: 'pending',
  },
};

function StatusBadge(props) {
  const { label } = props;
  return (
    <div className={`status-badge ${STATUS[label].className}`}>{label}</div>
  );
}

StatusBadge.defaultProps = {
  label: '',
};

StatusBadge.propTypes = {
  label: PropTypes.string,
};

export default React.memo(StatusBadge);
