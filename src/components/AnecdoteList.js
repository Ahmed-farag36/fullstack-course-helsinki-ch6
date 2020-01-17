import React from "react";

import { voteAnecdoteAction } from "../reducers/anecdoteReducer";
import { showNotificationAction } from "../reducers/notificationReducer";

export default ({ store }) => {
  const { anecdotes, filter } = store.getState();

  const vote = (id, content) => {
    store.dispatch(voteAnecdoteAction(id));
    store.dispatch(showNotificationAction(`You voted "${content}"`));
  };

  const filterAnecdotes = () => {
    return anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter)
    );
  };

  return (
    <React.Fragment>
      {filterAnecdotes().length ? (
        filterAnecdotes()
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
          ))
      ) : (
        <div>Nothing match</div>
      )}
    </React.Fragment>
  );
};
