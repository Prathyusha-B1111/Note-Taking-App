import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote, pinNote } from "../redux/notesReducer";
import "./Note.css";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handlePin = () => {
    dispatch(pinNote(note.id));
  };

  return (
    <div
      className={`note ${note.pinned ? "pinned" : ""}`}
      style={{ backgroundColor: note.bgColor }}
    >
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      {note.image && <img src={note.image} alt="Note" className="note-image" />}
      <button onClick={handlePin}>Pin</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
