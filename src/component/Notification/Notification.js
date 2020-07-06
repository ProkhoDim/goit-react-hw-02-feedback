import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

Notification.propType = {
  message: PropTypes.string.isRequired,
};

export default Notification;
