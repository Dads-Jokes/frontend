import React from "react";

const JokeList = props => {
  return (
    <div>
      {props.jokes.map(joke => (
        <div className="note" key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.body}</p>
        </div>
      ))}
    </div>
  );
};

export default JokeList;