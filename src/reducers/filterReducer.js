const initialState = "";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return action.content;
    default:
      return state;
  }
};

export const filterAction = content => {
  return {
    type: "FILTER",
    content
  };
};

export default filterReducer;
