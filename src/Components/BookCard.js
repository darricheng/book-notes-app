import { useState } from "react";
import BookInfoPopover from "./BookInfoPopover";

export default function BookCard({ book, cardClick }) {
  // useState to determine if mouse is hovering over info element
  // source: https://bobbyhadz.com/blog/react-show-element-on-hover
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="flex flex-col justify-between items-center p-6 min-w-256 max-w-256 min-h-216 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="relative">
        <div
          className="info-icon absolute -top-5 -left-30 cursor-help"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20V20Z"
              fill="gray"
            />
            <path
              d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
              fill="gray"
            />
            <path
              d="M12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V11C13 10.7348 12.8946 10.4804 12.7071 10.2929C12.5196 10.1054 12.2652 10 12 10Z"
              fill="gray"
            />
          </svg>
          {isHovering && (
            <BookInfoPopover
              olid={book.cover_edition_key}
              pubYr={book.first_publish_year}
              subtitle={book.subtitle}
            />
          )}
        </div>
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {book.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {book.author_name.reduce((prev, curr, index) => {
          if (index === 0) return prev + curr;
          else return prev + ", " + curr;
        }, "")}
      </p>
      <div
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800"
        onClick={() => cardClick(book)}
      >
        Add to collection
      </div>
    </div>
  );
}
