import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

export default function NotesLibrary() {
  // const lib = useSelector((state) => state.library.value);
  // const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-4xl font-bold">Manage your notes here</h1>
      <Outlet />
    </div>
  );
}
