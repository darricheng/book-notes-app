import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteLibBook } from "../Redux/librarySlice";
import Note from "../Components/Note";
import { saveState } from "../localStorage";

// TODO: Change save button to save notes in redux to localStorage or server

export default function BookContainer() {
  const navigate = useNavigate();

  // Get the isbn from the url
  const params = useParams();
  const isbn = params.isbn;

  const dispatch = useDispatch();
  const lib = useSelector((state) => state.library.value);
  const book = lib[isbn];
  const notes = book.notes;
  console.log(notes);

  const save = () => {
    saveState(lib);
    console.log("saved");
  };

  const handleDeleteBook = () => {
    const payload = { isbn: isbn };
    // Navigate away from page as it no longer exists
    navigate("/notes-library");
    dispatch(deleteLibBook(payload));
  };

  const noteSections = notes.map((note, i) => {
    return <Note key={i} index={i} isbn={isbn} />;
  });

  // TODO: If it's a new book without notes, show one empty <Note /> by default

  return (
    <div className="notes-lib relative">
      <h1 className="text-4xl font-bold">{book.title}</h1>
      <h2 className="text-lg font-semibold">{book.author}</h2>
      <button
        type="button"
        className="absolute top-2 left-8 text-gray-800 hover:bg-red-400 border-2 border-red-700 hover:border-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-600 dark:hover:border-red-700 dark:focus:ring-red-900"
        onClick={() => handleDeleteBook()}
      >
        Delete Book
      </button>
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
      <div id="note-sections">{noteSections}</div>
    </div>
  );
}
