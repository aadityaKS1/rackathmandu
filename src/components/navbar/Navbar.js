import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Rotaract Logo" className="w-12" />
          <h1
            className={`font-bold text-lg transition-colors duration-300 ${
              scrolled ? "text-[#193172]" : "text-white"
            }`}
          >
            Rotaract Kathmandu
          </h1>
        </div>

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
                    : scrolled
                    ? "text-gray-700 hover:text-[#DA1E5C]"
                    : "text-white hover:text-[#DA1E5C]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <NavLink
            to="/join-us"
            className="bg-[#DA1E5C] text-white px-6 py-2 rounded-xl
                       hover:scale-105 transition-all duration-300"
          >
            Join Us
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-[#193172]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
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
            to="/join-us"
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