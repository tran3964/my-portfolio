import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Skills & Academy", to: "/skills" },
//    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="nav-title">Nguyen Tran’s Portfolio</div>

        <div className="nav-actions">
          {items.map(({ label, to }) => {
            const isActive = pathname === to;
            return (
              <button
                key={to}
                type="button"
                className={`nav-btn${isActive ? " is-active" : ""}`}
                onClick={() => navigate(to)}
              >
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
