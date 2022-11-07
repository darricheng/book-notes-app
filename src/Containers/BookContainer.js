import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../Redux/librarySlice";
import Note from "../Components/Note";
// import { useState } from "react";

class NewNote {
  constructor() {
    this.highlight = "";
    this.note = "";
  }
}

// TODO: Simplify state management, make redux the SSOT for the text in the textareas
// TODO: Change save button to save notes in redux to localStorage or server

export default function BookContainer() {
  // Get the isbn from the url
  const params = useParams();
  const isbn = params.isbn;

  const dispatch = useDispatch();
  const lib = useSelector((state) => state.library.value);
  const book = lib[isbn];
  const notes = book.notes;
  console.log(notes);

  const save = () => {
    // const payload = {
    //   notes: notes,
    //   isbn: isbn,
    // };
    // dispatch(saveNotes(payload));
    console.log("saved");
  };

  const noteSections = notes.map((note, i) => {
    return <Note index={i} isbn={isbn} />;
  });

  // TODO: If it's a new book without notes, show one empty <Note /> by default

  return (
    <div className="notes-lib relative">
      <h1 className="text-4xl font-bold">{book.title}</h1>
      <h2 className="text-lg font-semibold">{book.author}</h2>
      <button
        className="sticky top-48 left-9/10 -translate-y-24 z-50 px-6 py-1 bg-blue-500 hover:bg-blue-400 rounded-full text-white text-xl font-semibold"
        onClick={() => save()}
      >
        Save Notes
      </button>
      <button
        className="sticky top-48 left-9/10 -translate-y-8 z-50 px-6 py-1 border-2 border-blue-500 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 text-xl font-semibold"
        onClick={() => dispatch(addNote({ isbn: isbn }))}
      >
        Add New Note
      </button>
      <div>{noteSections}</div>
    </div>
  );
}
