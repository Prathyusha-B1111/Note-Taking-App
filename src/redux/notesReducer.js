import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
    pinNote: (state, action) => {
      return state.map((note) =>
        note.id === action.payload ? { ...note, pinned: !note.pinned } : note
      );
    },
  },
});

export const { addNote, deleteNote, pinNote } = notesSlice.actions;
export default notesSlice.reducer;
