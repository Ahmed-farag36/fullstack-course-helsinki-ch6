import React from "react";
import { connect } from "react-redux";

import { filterAction } from "../reducers/filterReducer";

const FilterAnecdotes = ({ filterAction }) => (
  <div>
    <label>Filter </label>
    <input onChange={({ target: { value } }) => filterAction(value)} />
  </div>
);

export default connect(
  null,
  { filterAction }
)(FilterAnecdotes);
