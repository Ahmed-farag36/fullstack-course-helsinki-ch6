import React from "react";
import { connect } from "react-redux";

import { voteAnecdoteAction } from "../reducers/anecdoteReducer";
import { showNotificationAction } from "../reducers/notificationReducer";

const AnecdoteList = ({
  filterAnecdotes,
  voteAnecdoteAction,
  showNotificationAction
}) => {
  const vote = (id, content) => {
    voteAnecdoteAction(id);
    showNotificationAction(`You voted "${content}"`);
  };

  return (
    <React.Fragment>
      {filterAnecdotes ? (
        filterAnecdotes
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

const filterAnecdotes = ({ anecdotes, filter }) => {
  const filtered = anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter)
  );
  return filtered.length ? filtered : null;
};

const mapStateToProps = state => {
  return {
    filterAnecdotes: filterAnecdotes(state)
  };
};

const mapDispatchToProps = {
  voteAnecdoteAction,
  showNotificationAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
