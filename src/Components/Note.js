import { useState } from "react";

export default function Note() {
  const defaultNoteObj = {
    highlight: "",
    note: "",
  };
  const [noteObj, setNoteObj] = useState(defaultNoteObj);

  const updateHighlight = (data) => {
    setNoteObj((prev) => {
      return {
        ...prev,
        highlight: data,
      };
    });
  };
  const updateNote = (data) => {
    setNoteObj((prev) => {
      return {
        ...prev,
        note: data,
      };
    });
  };

  return (
    <div className="note-wrapper relative mb-8 pb-8 pt-2 px-8 border border-solid border-gray-700 rounded-3xl">
      <h2>Note {/* index */}1</h2>
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
        ></textarea>
      </div>
    </div>
  );
}
