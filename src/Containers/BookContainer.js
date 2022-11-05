import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveNotes } from "../Redux/librarySlice";
import Note from "../Components/Note";
import { useEffect, useState } from "react";

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
  // const [isbn, setIsbn] = useState(null);
  // setIsbn(params);
  const params = useParams();
  const isbn = params.isbn;

  // Access the redux state
  const lib = useSelector((state) => state.library.value);
  const dispatch = useDispatch();

  const book = lib[isbn];
  console.log("book", book);
  console.log("book notes", book.notes);
  const [notes, setNotes] = useState(book.notes);
  console.log("notes", notes);

  const updateUserNote = (data) => {
    setNotes((prev) => {
      prev[data.index][data.type] = data.payload;
      return prev;
    });
  };

  const save = () => {
    const payload = {
      notes: notes,
      isbn: isbn,
    };
    dispatch(saveNotes(payload));
    console.log(lib);
  };

  // if (notes.length === 0) setNotes(() => [...notes, new NewNote()]);

  const noteSections = notes.map((note, i) => {
    return (
      <Note
        highlight={note.highlight}
        userNotes={note.note}
        index={i}
        updateUserNote={updateUserNote}
      />
    );
  });

  return (
    <div className="notes-lib relative">
      <h1 className="text-4xl font-bold">{book.title}</h1>
      <h2 className="text-lg font-semibold">{book.author}</h2>
      <button
        className="sticky top-32 left-9/10 -translate-y-24 z-50 px-6 py-1 bg-blue-500 hover:bg-blue-400 rounded-full text-white text-xl font-semibold"
        onClick={() => save()}
      >
        Save Notes
      </button>
      <button
        className="sticky top-32 left-9/10 -translate-y-8 z-50 px-6 py-1 border-2 border-blue-500 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 text-xl font-semibold"
        onClick={() => setNotes(() => [...notes, new NewNote()])}
      >
        Add New Note
      </button>
      <div>{noteSections}</div>
    </div>
  );
}
