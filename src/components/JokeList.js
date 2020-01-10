import React from "react";

const JokeList = props => {
  return (
    <div>
      {props.jokes.map(joke => (
        <div className="note" key={joke.id}>
          <h2>{joke.setup}</h2>
          <p>{joke.punch_line}</p>
        </div>
      ))}
    </div>
  );
};

export default JokeList;