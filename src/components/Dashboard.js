import React, { useState, useEffect } from "react";
import JokeList from "./JokeList";
import CreateJokeForm from "./CreateJokeForm";
import axios from "axios";
import axiosWithAuth from "../auth/axiosWithAuth.js";
//import data from "./data";

function AppJokes() {
  const [jokes, setJokes] = useState([
    {
      id: 1,
      setup: " ",
      punch_line: " "
    }
  ]);

  useEffect(() => {
    axios
      .get("https://the-joker-spa.herokuapp.com/api/jokes")
      .then((response) => {
        console.log(response);
        setJokes(response.data);
      });
  }, []);

  const addNewJoke = (joke) => {
    const newJokes = {
      id: Date.now(),
      category: joke.category,
      setup: joke.setup,
      punch_line: joke.punch_line,
      likes: Math.floor(Math.random() * 100 + 1)
    };

    axiosWithAuth()
      .post("/jokes", newJokes)
      .then((res) => {
        console.log(res);
        axiosWithAuth()
          .get("/jokes")
          .then((response) => setJokes(response.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    // const newJokeCollection = [...jokes, newJokes];
    // setJokes(newJokeCollection);
  };

  return (
    <div className="App">
      <h1>My Jokes</h1>
      <CreateJokeForm addNewJoke={addNewJoke} />
      <JokeList jokes={jokes} />
    </div>
  );
}

export default AppJokes;
