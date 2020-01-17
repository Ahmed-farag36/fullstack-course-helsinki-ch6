const initialState = {
  message: ""
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return { message: action.message };
    case "HIDE":
      return { message: "" };
    default:
      return state;
  }
};

export const showNotificationAction = message => {
  return { type: "SHOW", message };
};

export const hideNotificationAction = () => {
  return { type: "HIDE" };
};

export default notificationReducer;
