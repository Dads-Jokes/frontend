import React, { useState } from "react";

const CreateJokeForm = () => {
        
 
        return (
            <form>
              <label htmlFor="title"> Tell me a joke.</label>
              <input 
              id="title" 
              type="text" 
              name="title" 
              placeholder="Enter a joke" 
            //   onChange={handleChanges}
            //   value={note.title}
              />
              <label htmlFor="note"> Dads Joke</label>
              <textarea 
              id="note" 
              name="body" 
              placeholder="Add Joke here"
            //   onChange={handleChanges}
            //   value={note.body}
              />
              <button type="submit"> Add Note</button>
            </form>
            );

}

export default CreateJokeForm;