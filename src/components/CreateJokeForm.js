import React, { useState } from "react";

const CreateJokeForm = ({ addNewJoke }) => {
  // console.log("this is our props",props);
  const [joke, setJoke] = useState({
    id: 0,
    category: "",
    setup: "",
    punch_line: "",
    likes: 0
  });

  const handleChanges = (event) => {
    setJoke({ ...joke, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    addNewJoke(joke);
    setJoke({ id: 1, category: "", setup: "", punch_line: "", likes: 0 });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="setup">Joke Title.</label>
      <br />
      <br />
      <input
        id="setup"
        type="text"
        name="setup"
        placeholder="Enter a title"
        onChange={handleChanges}
        value={joke.setup}
      />
      <label htmlFor="category">Category.</label>
      <br />
      <br />
      <input
        id="category"
        type="text"
        name="category"
        placeholder="Enter a category"
        onChange={handleChanges}
        value={joke.category}
      />
      <br />
      <br />
      <label htmlFor="joke"> Punchline </label>
      <br />
      <br />
      <textarea
        id="joke"
        name="punch_line"
        placeholder=" Enter the punchline"
        onChange={handleChanges}
        value={joke.punch_line}
      />
      <br />
      <br />
      <button type="submit"> Add Jokes </button>
    </form>
  );
};

export default CreateJokeForm;
