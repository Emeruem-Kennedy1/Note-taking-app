import React, { useState } from "react";
import { Add } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import {Zoom} from "@material-ui/core";

function CreateArea({title, content, onAdd}) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [isFocused, setIsFocused] = useState(false)

  const checkActive = () => {
    setIsFocused(true)
  }

  return (
    <div>
      <form className="create-note">
        {
          isFocused && <input
          name="title"
          onChange={handleChange}
          value={title}
          placeholder="Title"
        />}
        
        <textarea
        onFocus={checkActive}
          name="content"
          onChange={handleChange}
          value={content}
          placeholder="Take a note..."
          rows={isFocused? 3: 1}
        />
        <Zoom in={isFocused? true: false}>
          <Fab onClick={submitNote}><Add /> </Fab>
        </Zoom>
       
      </form>
    </div>
  );
}

export default CreateArea;
