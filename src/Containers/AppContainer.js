import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotesLibrary from "../Pages/NotesLibrary";
import SearchBooks from "../Pages/SearchBooks";
import BooksSidebar from "../Layouts/SidebarLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookContainer from "./BookContainer";

// Open Library Search API: https://openlibrary.org/dev/docs/api/search
const API_URL = "https://openlibrary.org/search.json?";

export default function AppContainer() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const makeApiCall = async (query) => {
    try {
      setIsSearching(true);
      const response = await fetch(query);
      const resObj = await response.json();
      // Just process the top 50 results
      setSearchResults(resObj.docs.slice(0, 50));
      setIsSearching(false);
    } catch {
      console.log("ERROR making api call");
    }
  };

  const submitSearch = (e, queryType) => {
    // Navigate to search page if search is done on home page
    if (e.target.closest("#home")) navigate("/search");

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
      <Route
        path="/"
        element={
          <Home
            setSearchText={setSearchText}
            submitSearch={submitSearch}
            searchResults={searchResults}
          />
        }
      />
      <Route element={<BooksSidebar />}>
        <Route
          path="search"
          element={
            <SearchBooks
              setSearchText={setSearchText}
              submitSearch={submitSearch}
              searchResults={searchResults}
              isSearching={isSearching}
            />
          }
        />
        <Route path="notes-library" element={<NotesLibrary />}>
          <Route path=":isbn" element={<BookContainer />} />
        </Route>
      </Route>
    </Routes>
  );
}
