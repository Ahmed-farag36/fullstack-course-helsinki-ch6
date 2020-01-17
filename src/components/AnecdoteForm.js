import React from "react";
import { createAnecdoteAction } from "../reducers/anecdoteReducer";

export default props => {
  const createAnecdote = e => {
    e.preventDefault();
    props.store.dispatch(createAnecdoteAction(e.target.content.value));
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
