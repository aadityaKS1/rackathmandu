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
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">

      <div className="max-w-[1300px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Rotaract Logo" className="w-10 md:w-12" />
          <h1 className="font-semibold text-sm sm:text-base md:text-lg text-[#193172] whitespace-nowrap">
            Rotaract Club of Kathmandu
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `relative transition-colors duration-300 ${
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
          aria-label="Toggle Menu"
          className="md:hidden text-[#193172] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 shadow-md transition-all duration-300 ${
          menuOpen ? "max-h-[400px] py-4 px-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium hover:text-[#DA1E5C] transition"
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
      </div>

    </header>
  );
};

export default Navbar;