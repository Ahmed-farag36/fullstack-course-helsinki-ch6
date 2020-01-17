import React from "react";
import { voteAnecdoteAction } from "../reducers/anecdoteReducer";
import { showNotificationAction } from "../reducers/notificationReducer";

export default props => {
  const { anecdotes } = props.store.getState();

  const vote = (id, content) => {
    props.store.dispatch(voteAnecdoteAction(id));
    props.store.dispatch(showNotificationAction(`You voted "${content}"`));
  };

  return (
    <React.Fragment>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote.content)}>
                vote
              </button>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};
