import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Search from "../Components/Search";

export default function AppContainer() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
