import { Outlet, useOutlet } from "react-router-dom";

export default function NotesLibrary() {
  return (
    <div>
      {useOutlet() ? (
        <Outlet />
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4">Manage your notes here</h1>
          <p>Select a book from the sidebar to get started</p>
        </>
      )}
    </div>
  );
}
