import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotesLibrary from "../Pages/NotesLibrary";
import SearchBooks from "../Pages/SearchBooks";
import BooksSidebar from "../Layouts/SidebarLayout";

export default function AppContainer() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<BooksSidebar />}>
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/notes-library" element={<NotesLibrary />} />
      </Route>
    </Routes>
  );
}
