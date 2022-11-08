export default function AlertLayout({ coords = "", children }) {
  return (
    <div
      id="popover-default"
      role="tooltip"
      className={
        "inline-block absolute z-10 py-1 px-3 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 " + // Space to separate classes
        coords
      }
    >
      {children}
    </div>
  );
}
