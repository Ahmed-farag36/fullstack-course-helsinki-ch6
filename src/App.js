import React from "react";

const App = props => {
  const anecdotes = props.store.getState();

  const vote = id => {
    console.log("vote", id);
    props.store.dispatch({ type: "VOTE", data: { id } });
  };

  const createAnecdote = e => {
    e.preventDefault();
    props.store.dispatch({
      type: "CREATE_ANECDOTE",
      data: {
        id: 4,
        content: e.target.content.value,
        votes: 0
      }
    });
    e.target.content.value = "";
  };

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
