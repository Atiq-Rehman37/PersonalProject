import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand logo-wrapper">
          <img src="/logo.png" alt="Atiq Rehman Logo" className="navbar-logo" />

          <span className="brand-name">
            Atiq <span>Rehman</span>
          </span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-4 text-center">
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#contact">
                Contact
              </a>
            </li>

            {/* Mobile Button */}
            <li className="nav-item d-lg-none mt-3">
              <a href="#contact" className="btn hire-btn">
                Hire Me
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="d-none d-lg-block">
          <a href="#contact" className="btn hire-btn">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
