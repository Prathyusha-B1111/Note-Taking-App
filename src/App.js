import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Note Taking App</h1>
        <NoteForm />
        <NoteList />
      </div>
    </Provider>
  );
}

export default App;
