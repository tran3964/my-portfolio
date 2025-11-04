import { NavLink } from "react-router-dom";

export default function NavBar() {
  const base =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const normal =
    "text-emerald-400/80 hover:text-emerald-300 hover:bg-emerald-500/10";
  const active =
    "text-emerald-300 border-b-2 border-emerald-400 bg-emerald-500/10";
  return (
  <header className="sticky top-0 z-50 border-b border-emerald-500/30 bg-black/70 backdrop-blur">
      <nav className="max-w-6xl mx-auto h-14 flex items-center justify-between px-6">
        {/* ----- Title ----- */}
        <div className="text-emerald-400 font-semibold text-lg tracking-wide select-none">
          Nguyen Tran’s Portfolio
        </div>

        {/* ----- Nav links ----- */}
        <div className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${base} ${isActive ? active : normal}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${base} ${isActive ? active : normal}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${base} ${isActive ? active : normal}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${base} ${isActive ? active : normal}`
            }
          >
            Skills & Certs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${base} ${isActive ? active : normal}`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
