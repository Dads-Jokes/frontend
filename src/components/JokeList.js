import React from "react";
import JokeCard from "./JokeCard.js";

const JokeList = (props) => {
  return (
    <div>
      {props.jokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

export default JokeList;
