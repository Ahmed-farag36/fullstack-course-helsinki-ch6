import React from "react";

import { filterAction } from "../reducers/filterReducer";

export default ({ store: { dispatch } }) => (
  <div>
    <label>Filter </label>
    <input
      onChange={({ target: { value } }) => dispatch(filterAction(value))}
    />
  </div>
);
