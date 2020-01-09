import React, { useState } from "react";

const CreateJokeForm = ({ addNewJoke }) => {
  // console.log("this is our props",props);
  const [joke, setJoke] = useState({ id: "", title: "", body: "" });

  const handleChanges = event => {
    setJoke({ ...joke, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addNewJoke(joke);
    setJoke({ id: "", title: "", body: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Tell me a joke.</label>
      <br />
      <br />
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Enter a joke"
        onChange={handleChanges}
        value={joke.title}
      />
      <br />
      <br />
      <label htmlFor="joke"> Dads Joke </label>
      <br />
      <br />
      <textarea
        id="joke"
        name="body"
        placeholder=" Add Joke here "
        onChange={handleChanges}
        value={joke.body}
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
//               <label htmlFor="title"> Tell me a joke.</label>
//               <input 
//               id="title" 
//               type="text" 
//               name="title" 
//               placeholder="Enter a joke" 
//             //   onChange={handleChanges}
//             //   value={note.title}
//               />
//               <label htmlFor="note"> Dads Joke</label>
//               <textarea 
//               id="note" 
//               name="body" 
//               placeholder="Add Joke here"
//             //   onChange={handleChanges}
//             //   value={note.body}
//               />
//               <button type="submit"> Add Jokes</button>
//             </form>
//             );

// }

export default CreateJokeForm;