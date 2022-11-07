import BookCard from "../Components/BookCard";
import SearchBar from "../Components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { addToCollection } from "../Redux/librarySlice";

export default function SearchBooks({
  // destructured props
  setSearchText,
  submitSearch,
  searchResults,
}) {
  const dispatch = useDispatch();

  const cardClick = (data) => {
    const payload = { book: data };
    dispatch(addToCollection(payload));
  };

  const bookCards = searchResults.map((book, i) => (
    <BookCard book={book} index={i} cardClick={cardClick} />
  ));

  return (
    <>
      <SearchBar setSearchText={setSearchText} submitSearch={submitSearch} />
      <div className="search-results-container mt-12 flex flex-row flex-wrap justify-evenly gap-16">
        {bookCards.length === 0 ? (
          <h1 className="text-4xl font-bold">Search for a book to begin</h1>
        ) : (
          bookCards
        )}
      </div>
    </>
  );
}
