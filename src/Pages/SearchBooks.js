import BookCard from "../Components/BookCard";
import SearchBar from "../Components/SearchBar";
import { useDispatch } from "react-redux";
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

  const bookCards = searchResults.map((book, i) => {
    // Show only books that have the following details in the returned object
    if (book.title && book.author_name && book.cover_edition_key) {
      return <BookCard book={book} key={i} cardClick={cardClick} />;
    } else return;
  });

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
