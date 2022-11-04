import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SidebarCard from "../Components/SidebarCard";

export default function SidebarLayout() {
  const lib = useSelector((state) => state.library.value);
  const collection = lib.map((book, i) => {
    return <SidebarCard title={book.title} index={i} />;
  });

  return (
    // https://flowbite.com/docs/components/sidebar/#default-sidebar
    <div className="sidebar-layout">
      <aside
        className="w-64 fixed left-0 top-18 h-screen lg:max-h-app overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <h2 className="pb-3 text-xl font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          Your Books
        </h2>
        <ul className="space-y-2">
          {lib.length === 0 ? (
            <li>Your collection will appear here</li>
          ) : (
            collection
          )}
        </ul>
      </aside>
      <div className="another-container ml-64 p-12">
        {/* <Outlet /> is where props.children is rendered */}
        <Outlet />
      </div>
    </div>
  );
}
