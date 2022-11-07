import SearchBar from "../Components/SearchBar";

export default function Home({
  // destructured props
  setSearchText,
  submitSearch,
}) {
  return (
    <div className="p-12" id="home">
      <h1>Welcome to Book Notes</h1>
      <SearchBar setSearchText={setSearchText} submitSearch={submitSearch} />
    </div>
  );
}
