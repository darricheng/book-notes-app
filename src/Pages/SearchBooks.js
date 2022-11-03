import BookCard from "../Components/BookCard";
import SearchBar from "../Components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { addToCollection } from "../Redux/librarySlice";
import { useEffect } from "react";

class LibraryBook {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.notes = [];
  }
}

export default function SearchBooks({
  // destructured props
  setSearchText,
  submitSearch,
  searchResults,
}) {
  const lib = useSelector((state) => state.library.value);
  const dispatch = useDispatch();

  const cardClick = (data) => {
    /* Use destructuring to convert class Object to a plain JS object
		Source: https://stackoverflow.com/questions/34699529/convert-javascript-class-instance-to-plain-object-preserving-methods
		
		# Why?
    - Payload passed to redux needs to be serializable: https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants
		- Only plain objects are serializable: https://developer.mozilla.org/en-US/docs/Glossary/Serializable_object#supported_objects
		*/
    const { ...book } = new LibraryBook(
      data.title,
      data.author_name,
      data.isbn
    );
    dispatch(addToCollection(book));
  };

  useEffect(() => {
    console.log(lib);
  }, [lib]);

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
