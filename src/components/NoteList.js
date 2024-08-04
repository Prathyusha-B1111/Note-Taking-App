import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
