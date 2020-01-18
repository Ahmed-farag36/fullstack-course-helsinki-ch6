import React, { useEffect } from "react";
import { connect } from "react-redux";

import { hideNotificationAction } from "../reducers/notificationReducer";

const Notification = ({ message, hideNotificationAction }) => {
  // const message = store.getState().notification.message;

  useEffect(() => {
    const id = setTimeout(() => {
      hideNotificationAction();
    }, 5000);
    return () => clearTimeout(id);
  }, [message, hideNotificationAction]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  return message && <div style={style}>{message}</div>;
};

const mapStateToProps = state => {
  console.log(state);
  return {
    message: state.notification.message
  };
};

export default connect(
  mapStateToProps,
  { hideNotificationAction }
)(Notification);
