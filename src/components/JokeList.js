import React, { useContext } from "react";
import JokeCard from "./JokeCard.js";
import { Link } from "react-router-dom";
import { JokeContext } from "../contexts/JokeContext.js";

const JokeList = () => {
  const [jokes, setJokes] = useContext(JokeContext);

  return (
    <div>
      {jokes.map((joke) => (
        <Link to={`/dashboard/${joke.id}`} key={joke.id}>
          <JokeCard joke={joke} />
          <hr />
        </Link>
      ))}
    </div>
  );
};

export default JokeList;
