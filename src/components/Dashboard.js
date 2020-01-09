import React, { useState } from "react";
import JokeList from "./JokeList";
import CreateJokeForm from "./CreateJokeForm";
//import data from "./data";

function AppJokes() {
  const [jokes, setJokes] = useState([
    {
      id: 1,
      title: "This is a Dad Jokes",
      body: " Not so Funny jokes...Ha,Ha,Ha"
    }
  ]);

  const addNewJoke = joke => {
    const newJokes = {
      id: Date.now(),
      title: joke.title,
      body: joke.body
    };
    const newJokeCollection = [...jokes, newJokes];
    setJokes(newJokeCollection);
  };

  return (
    <div className="App">
      <h1>My Jokes</h1>
      <CreateJokeForm addNewJoke={addNewJoke} />
      <JokeList jokes={jokes} />
    </div>
  );
}

export default  AppJokes;