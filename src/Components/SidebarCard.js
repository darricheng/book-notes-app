export default function SidebarCard({ title }) {
  return (
    <li>
      <div
        href="#"
        className="flex items-center p-2 rounded-lg text-base font-normal text-gray-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 hover:cursor-pointer"
      >
        <span className="ml-3">{title}</span>
      </div>
    </li>
  );
}
