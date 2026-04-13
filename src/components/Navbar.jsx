import { NavLink } from "react-router-dom";

export default function Navbar() {
  // NavLink automatically adds "active" styling when the route matches
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-colors ${
      isActive
        ? "bg-orange-500 text-white"
        : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
    }`;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / App name */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍱</span>
          <span className="font-bold text-xl text-orange-600">SchoolCanteen</span>
        </div>

        {/* Navigation links */}
        <div className="flex gap-2">
          <NavLink to="/snacks" className={linkClass}>
            Snacks
          </NavLink>
          <NavLink to="/students" className={linkClass}>
            Students
          </NavLink>
          <NavLink to="/create-student" className={linkClass}>
            + New Student
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
