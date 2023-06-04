import propTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <div className="notification">{message}</div>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
