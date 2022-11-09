import DescCard from "../Components/DescCard";
import SearchBar from "../Components/SearchBar";
import stackOfBooks from "../img/stack-of-books.jpg";
import libraryBookshelf from "../img/library-bookshelf.jpg";
import StartCollectionBtn from "../Components/StartCollectionBtn";

export default function Home({
  // destructured props
  setSearchText,
  submitSearch,
}) {
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
      <section className="mb-20">
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
      </section>
      <StartCollectionBtn />
      <h3 className="mt-8 mb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
        How does it work?
      </h3>
      <div className="text-left w-1/4 mx-auto text-2xl mb-24 font-medium text-gray-900">
        <ol className="list-decimal">
          <li>Search for your favourite books</li>
          <li>Add books to your collection</li>
          <li>Add notes with your book highlights</li>
          <li>Click the Save button</li>
        </ol>
      </div>
      <h3 className="mb-20 text-5xl leading-snug font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-violet-500">
        Join fellow readers happily focusing on their reading
      </h3>
      <StartCollectionBtn />
    </div>
  );
}
