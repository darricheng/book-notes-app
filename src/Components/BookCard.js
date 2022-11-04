export default function BookCard({ book, index, cardClick }) {
  return (
    <div
      className="flex flex-col justify-between items-center hover:cursor-pointer p-6 min-w-256 max-w-256 min-h-216 bg-white  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      key={index}
      onClick={() => cardClick(book)}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {book.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {book.author_name}
      </p>
      <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800">
        Add to collection
      </div>
    </div>
  );
}
