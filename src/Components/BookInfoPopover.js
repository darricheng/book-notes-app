export default function BookInfoPopover({ olid, pubYr }) {
  const coverUrl = `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;
  const openLibUrl = `https://openlibrary.org/books/${olid}`;

  return (
    <div
      data-popover
      id="popover-description"
      role="tooltip"
      className="absolute flex flex-col justify-between items-center -right-2 z-50 w-64 text-sm font-light text-gray-500 bg-gray-50 rounded-lg border border-gray-200 shadow-sm transition-opacity duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
    >
      <div className="p-3">
        <img src={coverUrl}></img>
        <h3 className="font-semibold text-gray-900 dark:text-white">
          First Published Year: {pubYr}
        </h3>
        <a
          href={openLibUrl}
          target="_blank"
          className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700"
        >
          View on Open Library{" "}
          <svg
            className="ml-1 w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div data-popper-arrow></div>
    </div>
  );
}
