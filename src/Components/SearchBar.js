import { useState } from "react";

export default function SearchBar({ setSearchText, submitSearch }) {
  const [queryType, setQueryType] = useState("title");

  const handleChange = (e) => {
    setQueryType(e.target.value);
  };

  return (
    <div className="block">
      <form
        className="inline-block w-128"
        onSubmit={(e) => {
          e.preventDefault();
          submitSearch(queryType);
        }}
      >
        <div className="relative">
          <label htmlFor="search-type"></label>
          <label htmlFor="search"></label>
          <div className="flex absolute inset-y-0 left-24 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className="flex">
            <select
              name="search-type"
              id="search-type"
              className="py-4 pl-5 pr-6 text-sm text-gray-900 bg-gray-200 rounded-l-lg border border-gray-300"
              onChange={(e) => handleChange(e)}
            >
              <option value={"title"}>Title</option>
              <option value={"author"}>Author</option>
            </select>
            <input
              type="search"
              id="search"
              className="p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by Book Title"
              required="required"
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
          </div>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
