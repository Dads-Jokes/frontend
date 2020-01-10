import React, { useState } from "react";

const CreateJokeForm = ({ addNewJoke }) => {
  // console.log("this is our props",props);
  const [joke, setJoke] = useState({ id: "", setup: "", punch_line: "" });

  const handleChanges = event => {
    setJoke({ ...joke, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addNewJoke(joke);
    setJoke({ id: 1, setup: " ", punch_line: " " });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="setup">Tell me a joke.</label>
      <br />
      <br />
      <input
        id="setup"
        type="text"
        name="setup"
        placeholder="Enter a joke"
        onChange={handleChanges}
        value={joke.setup}
      />
      <br />
      <br />
      <label htmlFor="joke"> Dads Joke </label>
      <br />
      <br />
      <textarea
        id="joke"
        name="punch_line"
        placeholder=" Add Joke here "
        onChange={handleChanges}
        value={joke.punch_line}
      />
      <br />
      <br />
      <button type="submit"> Add Jokes </button>
    </form>
  );
};




// import React, { useState } from "react";

// const CreateJokeForm = () => {
        
 
//         return (
//             <form>
//               <label htmlFor="setup"> Tell me a joke.</label>
//               <input 
//               id="setup" 
//               type="text" 
//               name="setup" 
//               placeholder="Enter a joke" 
//             //   onChange={handleChanges}
//             //   value={note.setup}
//               />
//               <label htmlFor="note"> Dads Joke</label>
//               <textarea 
//               id="note" 
//               name="punch_line" 
//               placeholder="Add Joke here"
//             //   onChange={handleChanges}
//             //   value={note.punch_line}
//               />
//               <button type="submit"> Add Jokes</button>
//             </form>
//             );

// }

export default CreateJokeForm;