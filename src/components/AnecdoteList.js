import React from "react";
import { voteAnecdoteAction } from "../reducers/anecdoteReducer";

export default props => {
  const anecdotes = props.store.getState();

  const vote = id => {
    console.log("vote", id);
    props.store.dispatch(voteAnecdoteAction(id));
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
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};
