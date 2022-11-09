import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteLibBook } from "../Redux/librarySlice";
import Note from "../Components/Note";
import DeleteButton from "../Components/DeleteButton";

export default function BookContainer() {
  const navigate = useNavigate();

  // Get the isbn from the url
  const params = useParams();
  const isbn = params.isbn;

  const dispatch = useDispatch();
  const lib = useSelector((state) => state.library.value);
  const book = lib[isbn];
  const notes = book.notes;

  const handleDeleteBook = () => {
    const payload = { isbn: isbn };
    // Navigate away from page as it no longer exists
    navigate("/notes-library");
    dispatch(deleteLibBook(payload));
  };

  const noteSections = notes.map((note, i) => {
    return <Note key={i} index={i} isbn={isbn} />;
  });

  const deleteBtnProps = {
    className:
      "absolute top-2 left-8 text-gray-800 bg-gray-300 hover:bg-red-400 border-2 border-red-700 hover:border-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-600 dark:hover:border-red-700 dark:focus:ring-red-900",
    onClick: handleDeleteBook,
  };

  return (
    <div className="notes-lib relative">
      <div className="max-w-4xl text-center mx-auto">
        <h1 className="text-4xl font-bold">{book.title}</h1>
        <h2 className="text-lg font-semibold mb-4">
          {book.author.reduce((prev, curr, index) => {
            if (index === 0) return prev + curr;
            else return prev + ", " + curr;
          }, "")}
        </h2>
      </div>
      <DeleteButton {...deleteBtnProps}>Delete Book</DeleteButton>
      <div className="sticky top-48 left-0 -translate-y-24 z-50">
        <button
          className="absolute top-12 right-0 px-6 py-1 border-2 border-blue-500 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 text-xl font-semibold shadow-lg"
          onClick={() => dispatch(addNote({ isbn: isbn }))}
        >
          Add New Note
        </button>
      </div>
      <div id="note-sections">{noteSections}</div>
    </div>
  );
}
