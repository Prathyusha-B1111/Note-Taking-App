import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notesReducer";
import "./NoteForm.css";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff"); // Default background color
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setError("Content should not be empty");
      return;
    }
    const newNote = {
      id: Date.now(),
      title,
      content,
      bgColor,
      image,
      pinned: false,
    };
    dispatch(addNote(newNote));
    setTitle("");
    setContent("");
    setBgColor("#ffffff");
    setImage(null);
    setError("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="note-form-container">
      <h2>Create a New Note</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title (optional)"
          className="note-form-input"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="note-form-textarea"
        />
        {error && <div className="note-form-error">{error}</div>}
        <div className="note-form-controls">
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="note-form-color-picker"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="note-form-file-input"
          />
          {image && (
            <img src={image} alt="Note" className="note-form-image-preview" />
          )}
          <button type="submit" className="note-form-button">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
