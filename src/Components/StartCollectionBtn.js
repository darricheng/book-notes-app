import { useNavigate } from "react-router-dom";

export default function StartCollectionBtn() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-12 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={() => navigate("/search")}
    >
      Start Your Collection
    </button>
  );
}
