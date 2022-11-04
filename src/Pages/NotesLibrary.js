import Note from "../Components/Note";
import { useSelector, useDispatch } from "react-redux";

export default function NotesLibrary() {
  const lib = useSelector((state) => state.library.value);
  const dispatch = useDispatch();

  return (
    <div className="notes-lib relative">
      <h1 className="text-4xl font-bold">
        Harry Potter and the Order of the Phoenix
      </h1>
      <h2 className="text-lg font-semibold">J.K. Rowling</h2>
      <button className="sticky top-32 left-9/10 -translate-y-8 z-50 px-6 py-1 bg-blue-500 hover:bg-blue-400 rounded-full text-white text-xl font-semibold">
        Save Notes
      </button>
      <Note />
      <Note />
      <Note />
    </div>
  );
}
