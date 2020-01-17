import React, { useEffect } from "react";

import { hideNotificationAction } from "../reducers/notificationReducer";

const Notification = ({ store }) => {
  const message = store.getState().notification.message;

  useEffect(() => {
    const id = setTimeout(() => {
      store.dispatch(hideNotificationAction());
    }, 5000);
    return () => clearTimeout(id);
  }, [store, message]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  return message && <div style={style}>{message}</div>;
};

export default Notification;
