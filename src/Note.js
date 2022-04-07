import React from "react";

const Note = (props) => {
  //console.log(props);
  const editNotes = () => props.deleteNote(props.note.id);

  const updateTitle = (event) =>
    props.onType(props.note.id, "title", event.target.value);

  const updateDescription = (event) =>
    props.onType(props.note.id, "description", event.target.value);

  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />

      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={editNotes}>
        X
      </span>
    </li>
  );
};

export default Note;
