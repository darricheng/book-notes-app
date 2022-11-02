import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotesLibrary from "../Pages/NotesLibrary";
import SearchBooks from "../Pages/SearchBooks";
import BooksSidebar from "../Layouts/SidebarLayout";
import { useState } from "react";

const API_URL = "http://openlibrary.org/search.json?q=";

export default function AppContainer() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const makeApiCall = async (query) => {
    try {
      const response = await fetch(API_URL + query);
      const resObj = await response.json();
      setSearchResults(resObj.docs);
    } catch {
      console.log("ERROR making api call");
    }
  };

  const submitSearch = (e) => {
    e.preventDefault();
    const trimmed = searchText.trim();
    console.log("trimmed", trimmed);
    const query = trimmed
      .split("")
      // Replace spaces with "+" (See API documentation: https://openlibrary.org/dev/docs/api/search)
      .map((l) => (l === " " ? "+" : l))
      .join("");
    makeApiCall(query);
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<BooksSidebar />}>
        <Route
          path="/search"
          element={
            <SearchBooks
              setSearchText={setSearchText}
              submitSearch={submitSearch}
              searchResults={searchResults}
            />
          }
        />
        <Route path="/notes-library" element={<NotesLibrary />} />
      </Route>
    </Routes>
  );
}
