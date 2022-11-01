import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import NotesLibrary from "../Components/NotesLibrary";
import SearchBooks from "../Components/SearchBooks";
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
