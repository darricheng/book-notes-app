import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotesLibrary from "../Pages/NotesLibrary";
import SearchBooks from "../Pages/SearchBooks";
import BooksSidebar from "../Layouts/SidebarLayout";
import { useState } from "react";
import NotesContainer from "./BookContainer";

// Open Library Search API: https://openlibrary.org/dev/docs/api/search
const API_URL = "https://openlibrary.org/search.json?";

export default function AppContainer() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const makeApiCall = async (query) => {
    try {
      const response = await fetch(query);
      const resObj = await response.json();
      // Just show the top 20 results
      setSearchResults(resObj.docs.slice(0, 20));
    } catch {
      console.log("ERROR making api call");
    }
  };

  const submitSearch = (queryType) => {
    const trimmed = searchText.trim();
    const queryText = trimmed
      .split("")
      // Replace spaces with "+" (See API documentation: https://openlibrary.org/dev/docs/api/search)
      .map((l) => (l === " " ? "+" : l))
      .join("");

    const lang = "eng";
    const query = `${API_URL}language=${lang}&${queryType}=${queryText}`;
    makeApiCall(query);
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<BooksSidebar />}>
        <Route
          path="search"
          element={
            <SearchBooks
              setSearchText={setSearchText}
              submitSearch={submitSearch}
              searchResults={searchResults}
            />
          }
        />
        <Route path="notes-library" element={<NotesLibrary />}>
          <Route path=":isbn" element={<NotesContainer />} />
        </Route>
      </Route>
    </Routes>
  );
}
