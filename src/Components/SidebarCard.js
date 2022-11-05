import { useNavigate } from "react-router-dom";

export default function SidebarCard({ title, index, isbn }) {
  const navigate = useNavigate();

  return (
    <li>
      {/* <NavLink to={`/notes-library/${isbn}`}> */}
      <div
        onClick={() => navigate(`/notes-library/${isbn}`)}
        key={index}
        isbn={isbn}
        className="flex items-center p-2 rounded-lg text-base font-normal text-gray-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 hover:cursor-pointer"
      >
        <span className="ml-3">{title}</span>
      </div>
      {/* </NavLink> */}
    </li>
  );
}
