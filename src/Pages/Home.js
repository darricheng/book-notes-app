import DescCard from "../Components/DescCard";
import SearchBar from "../Components/SearchBar";
import stackOfBooks from "../img/stack-of-books.jpg";
import libraryBookshelf from "../img/library-bookshelf.jpg";
import { useNavigate } from "react-router-dom";

export default function Home({
  // destructured props
  setSearchText,
  submitSearch,
}) {
  const navigate = useNavigate();
  return (
    <div className="p-12" id="home">
      <h1 className="text-7xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
        Welcome to Book Notes
      </h1>
      <p className="text-lg font-semibold mb-20 text-gray-700">
        Store notes that you take with their respective highlights from your
        favourite books
      </p>
      <h2 className="text-4xl font-bold mb-12 text-slate-800">
        Search for a book to begin
      </h2>
      <SearchBar setSearchText={setSearchText} submitSearch={submitSearch} />
      <h3 className="mt-40 mb-16 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-400">
        What is Book Notes?
      </h3>
      <DescCard
        img={stackOfBooks}
        header="Book Notes is the little haven that your notes deserve"
        para="Focus on your reading; we'll take care of your notes"
      />
      <DescCard
        img={libraryBookshelf}
        header="Just search for books, then start adding notes"
        para="It's that simple!"
      />
      <h3 className="mt-32 mb-20 text-5xl leading-snug font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-violet-500">
        Join many others happily focusing on their reading
      </h3>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-12 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => navigate("/search")}
      >
        Start Your Collection
      </button>
    </div>
  );
}
