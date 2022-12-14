import { NavLink } from "react-router-dom";
import { openLibCoverUrlGen } from "../Resources/commonUrls";

export default function SidebarCard({ title, isbn, olid }) {
  return (
    <li>
      <NavLink to={`/notes-library/${isbn}`}>
        <div
          isbn={isbn}
          className="flex items-center p-2 rounded-lg text-base font-normal text-gray-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 hover:cursor-pointer"
        >
          <img
            src={openLibCoverUrlGen(olid, "S")}
            className=""
            alt={title}
          ></img>
          <span className="ml-3">{title}</span>
        </div>
      </NavLink>
    </li>
  );
}
