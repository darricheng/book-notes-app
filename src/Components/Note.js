import { useSelector, useDispatch } from "react-redux";
import { updateNotes, deleteNote } from "../Redux/librarySlice";

export default function Note({ index, isbn }) {
  // Access the redux state
  const dispatch = useDispatch();

  // Add text to the textareas on component render
  // Source: https://reactjs.org/docs/forms.html#the-textarea-tag
  const textValues = useSelector(
    (state) => state.library.value[isbn].notes[index]
  );

  const updateNote = (data) => {
    const payload = {
      isbn: isbn,
      type: "note",
      value: data,
      index: index,
    };
    dispatch(updateNotes(payload));
  };

  const updateHighlight = (data) => {
    const payload = {
      isbn: isbn,
      type: "highlight",
      value: data,
      index: index,
    };
    dispatch(updateNotes(payload));
  };

  const handleDelete = () => {
    const payload = {
      isbn: isbn,
      index: index,
    };
    dispatch(deleteNote(payload));
  };

  return (
    <div className="note-wrapper relative mb-8 pb-8 pt-2 px-8 border border-solid border-gray-700 rounded-3xl">
      <h2 className="font-semibold text-2xl my-2">Note {index + 1}</h2>
      <button
        type="button"
        className="absolute top-4 left-7 focus:outline-none text-black border-2 hover:bg-gray-200 border-red-700 hover:border-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 dark:border-red-600 dark:hover:border-red-700 dark:focus:ring-red-900"
        onClick={() => handleDelete()}
      >
        Delete Note
      </button>
      <div className="highlight pb-2">
        <label
          htmlFor="highlight"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500 text-left"
        >
          Book highlight
        </label>
        <textarea
          id="highlight"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your book highlight..."
          onChange={(e) => updateHighlight(e.target.value)}
          value={textValues.highlight}
        ></textarea>
      </div>
      <div className="note">
        <label
          htmlFor="note"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500 text-left"
        >
          Your note
        </label>
        <textarea
          id="note"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your note..."
          onChange={(e) => updateNote(e.target.value)}
          value={textValues.note}
        ></textarea>
      </div>
    </div>
  );
}
