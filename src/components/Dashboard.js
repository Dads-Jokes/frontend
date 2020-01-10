import React, { useState, useEffect } from "react";
import JokeList from "./JokeList";
import CreateJokeForm from "./CreateJokeForm";
import axios from "axios";
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
    axios.get("https://jokr.herokuapp.com/api/jokes").then(response => {
      console.log(response);
      setJokes(response.data);
    });
  }, []);



  const addNewJoke = joke => {
    const newJokes = {
      id: Date.now(),
      setup: joke.setup,
      punch_line: joke.punch_line
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