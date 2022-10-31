import { Outlet } from "react-router-dom";

export default function BooksSidebar() {
  return (
    <div>
      <h1>some sidebar stuff</h1>
      <div className="another-container">
        <Outlet />
      </div>
    </div>
  );
}
