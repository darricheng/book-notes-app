import Note from "../Components/Note";
import { useSelector, useDispatch } from "react-redux";

export default function NotesLibrary() {
  const lib = useSelector((state) => state.library.value);
  const dispatch = useDispatch();

  return (
    <div className="notes-lib relative">
      <h1>Select a book from the sidebar to begin</h1>
      <button className="sticky top-32 left-9/10 -translate-y-8 z-50 px-4 py-1 bg-blue-400 rounded-full text-white">
        Save
      </button>
      <Note />
      <Note />
      <Note />
    </div>
  );
}
