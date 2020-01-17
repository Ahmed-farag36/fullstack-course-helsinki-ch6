import React from "react";

import { createAnecdoteAction } from "../reducers/anecdoteReducer";
import { showNotificationAction } from "../reducers/notificationReducer";

export default ({ store }) => {
  const createAnecdote = e => {
    e.preventDefault();
    store.dispatch(createAnecdoteAction(e.target.content.value));
    store.dispatch(
      showNotificationAction(
        `Anecdote "${e.target.content.value}" added successfully`
      )
    );
    e.target.content.value = "";
  };

  return (
    <React.Fragment>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button>create</button>
      </form>
    </React.Fragment>
  );
};
