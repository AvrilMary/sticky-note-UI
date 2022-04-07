import React from "react";
import Note from "./Note";

//Remember that props here are: notes

const NotesList = (props) => {
  //console.log(props);
  const filterCallBack = (note) => note.doesMatchSearch;
  const newNotes = props.notes.filter(filterCallBack);
  //console.log(props);

  const renderNote = (note) => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      deleteNote={props.deleteNote}
    />
  );
  const notesList = newNotes.map(renderNote);
  return <ul className="notes-list">{notesList}</ul>;
};

export default NotesList;
