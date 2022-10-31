import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import NotesLibrary from "../Components/NotesLibrary";
import Search from "../Components/Search";
import BooksSidebar from "../Layouts/BooksSidebar";

export default function AppContainer() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<BooksSidebar />}>
          <Route path="/search" element={<Search />} />
          <Route path="/notes-library" element={<NotesLibrary />} />
        </Route>
      </Routes>
    </div>
  );
}
