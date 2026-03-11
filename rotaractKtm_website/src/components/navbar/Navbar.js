import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Team", href: "/team" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">

      <div className="max-w-[1300px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Rotaract Logo" className="w-12" />
          <h1 className="font-bold text-lg text-[#193172]">
            Rotaract  Club of Kathmandu
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-[#DA1E5C]"
                    : "text-gray-700 hover:text-[#DA1E5C]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Join Button */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="bg-[#DA1E5C] text-white px-6 py-2 rounded-xl hover:scale-105 transition"
          >
            Join Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#193172] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-[#DA1E5C]"
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="block bg-[#DA1E5C] text-white text-center py-2 rounded-lg"
          >
            Join Us
          </NavLink>

        </div>
      )}

    </header>
  );
};

export default Navbar;