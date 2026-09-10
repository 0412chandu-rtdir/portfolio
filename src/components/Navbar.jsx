import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>
          <i className="fa-solid fa-laptop-code"></i>
          My<span>Portfolio</span>
        </h2>
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Navigation */}
      <div className={`nav-links${isMenuOpen ? " is-open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          <i className="fa-solid fa-house"></i>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          <i className="fa-solid fa-user"></i>
          About
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          <i className="fa-solid fa-briefcase"></i>
          Services
        </NavLink>

        <NavLink to="/education" onClick={closeMenu}>
          <i className="fa-solid fa-graduation-cap"></i>
          Education
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          <i className="fa-solid fa-envelope"></i>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;