import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { saveState } from "../localStorage";
import { useState } from "react";
import SidebarCard from "../Components/SidebarCard";
import AlertLayout from "../Layouts/AlertLayout";

export default function SidebarLayout() {
  const lib = useSelector((state) => state.library.value);
  const collection = Object.values(lib).map((book, i) => {
    return (
      <SidebarCard
        title={book.title}
        key={i}
        isbn={Object.keys(lib)[i]}
        olid={book.olid}
      />
    );
  });

  // Saving the collection to localStorage
  const [isSaving, setIsSaving] = useState(false);
  const save = () => {
    saveState(lib);
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    // https://flowbite.com/docs/components/sidebar/#default-sidebar
    <div className="sidebar-layout">
      <aside
        className="w-64 fixed left-0 top-18 h-screen lg:max-h-app overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <h2 className="pb-3 text-xl font-bold text-gray-900 dark:text-white">
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
        <div className="sticky top-48 left-0 -translate-y-24 z-50">
          <button
            className="absolute top-0 right-0 px-6 py-1 bg-blue-500 hover:bg-blue-400 rounded-full text-white text-xl font-semibold"
            onClick={() => save()}
          >
            Save Collection
          </button>
          {isSaving && (
            <AlertLayout coords={"top-1 right-48"}>
              <p>Notes Saved</p>
            </AlertLayout>
          )}
        </div>
        {/* <Outlet /> is where props.children is rendered */}
        <Outlet />
      </div>
    </div>
  );
}
