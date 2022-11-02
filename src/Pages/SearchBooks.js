import BookCard from "../Components/BookCard";
import SearchBar from "../Components/SearchBar";

export default function SearchBooks() {
  return (
    <>
      <SearchBar />
      <div className="search-results-container mt-12 flex flex-row flex-wrap justify-between gap-y-12">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </>
  );
}
