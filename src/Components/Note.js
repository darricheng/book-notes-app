export default function Note() {
  return (
    <div>
      <div>
        <label
          for="highlight"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Book highlight
        </label>
        <textarea
          id="highlight"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your book highlight..."
        ></textarea>
      </div>
      <div>
        <label
          for="note"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your note
        </label>
        <textarea
          id="note"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your note..."
        ></textarea>
      </div>
    </div>
  );
}
