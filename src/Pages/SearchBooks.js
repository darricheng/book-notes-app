import BookCard from "../Components/BookCard";
import SearchBar from "../Components/SearchBar";

export default function SearchBooks({
  // destructured props
  setSearchText,
  submitSearch,
  searchResults,
  isSearching,
}) {
  const bookCards = searchResults.map((book, i) => {
    // Show only books that have the following details in the returned object
    if (book.title && book.author_name && book.cover_edition_key) {
      return <BookCard book={book} key={i} />;
    } else return <></>; // React fragment as map method expects a return value
  });
  // ? Should the above method be filter instead of map?

  return (
    <>
      <SearchBar
        setSearchText={setSearchText}
        submitSearch={submitSearch}
        isSearching={isSearching}
      />
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
