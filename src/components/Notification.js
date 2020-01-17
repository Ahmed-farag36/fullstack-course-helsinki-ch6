import React, { useEffect } from "react";

import { hideNotificationAction } from "../reducers/notificationReducer";

const Notification = props => {
  const message = props.store.getState().notification.message;

  useEffect(() => {
    const id = setTimeout(() => {
      props.store.dispatch(hideNotificationAction());
    }, 5000);
    return () => clearTimeout(id);
  }, [props.store, message]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  return message && <div style={style}>{message}</div>;
};

export default Notification;
