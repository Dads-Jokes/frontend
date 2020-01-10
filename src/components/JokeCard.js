import React from "react";

const JokeCard = ({ joke }) => {
  return (
    <div>
      <h2>{joke.setup}</h2>
      <p>{joke.punch_line}</p>
    </div>
  );
};

export default JokeCard;
