import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${sticky ? "sticky" : ""}`}>

      <div className="container-custom">

        <div className="navbar-wrapper">

          {/* Logo */}

          <a href="/" className="logo">

           <img src={logo} alt="Logo" />

          </a>

          {/* Center */}

          <div className="navbar-center">

            <h2>
              PREMIUM RESIDENTIAL PROJECT
            </h2>

            <p>
              Modern Living • Premium Lifestyle
            </p>

            <span>
              REG. NO.: XXXXX/2026
            </span>

          </div>

          {/* Right */}

          <div className="navbar-right">

            <a href="tel:+918884735735" className="phone-box">

              <div className="phone-icon">

                <FaPhoneAlt />

              </div>

              <div>

                <small>Call Us</small>

                <h4>+91 88847 35735</h4>

              </div>

            </a>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      <nav className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#amenities" onClick={closeMenu}>
          Amenities
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="#location" onClick={closeMenu}>
          Location
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

    </header>
  );
}