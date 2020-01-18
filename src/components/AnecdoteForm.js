import React from "react";
import { connect } from "react-redux";

import { createAnecdoteAction } from "../reducers/anecdoteReducer";
import { showNotificationAction } from "../reducers/notificationReducer";
import FilterAnecdotes from "./FilterAnecdotes";

const AnecdoteForm = ({ createAnecdoteAction, showNotificationAction }) => {
  const createAnecdote = e => {
    e.preventDefault();
    const { content } = e.target;
    createAnecdoteAction(content.value);
    showNotificationAction(`Anecdote "${content.value}" added successfully`);
    content.value = "";
  };

  return (
    <React.Fragment>
      <FilterAnecdotes />
      <form onSubmit={createAnecdote}>
        <label>Create</label>
        <input name="content" />

        <button>create</button>
      </form>
    </React.Fragment>
  );
};

export default connect(
  null,
  {
    createAnecdoteAction,
    showNotificationAction
  }
)(AnecdoteForm);
