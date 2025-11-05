import React from "react";
// Make sure this path is correct for your logo file
import logo from "../../assets/logo.png"; 


const Navbar = () => {

  // Define the navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // Header remains simple for a clean look
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo + Name Section */}
        <div className="flex items-center gap-3">
          {/* Logo Size Fixed: Reduced for standard navbar size */}
          <img 
            src={logo} 
            alt="Rotaract Club of Kathmandu Logo" 
            className="w-12 h-auto" // Standard size for a web logo
          />
          {/* Club Name - Using the blue color directly */}
          <h1 className={`font-bold text-xl text-[#2F3B65FF]`}>
            Rotaract Club of Kathmandu
          </h1>
        </div>

        {/* Menu & Button Section (Desktop View) */}
        <div className="flex items-center gap-8">
            {/* Navigation Menu */}
            <nav className="flex gap-6 text-base leading-6 font-normal text-gray-600">
                {navLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href}
                        // Use hex color directly for hover and active state
                        className={`hover:text-[#E44E8CFF] transition duration-200 
                                    ${link.name === "Home" ? `border-b-2 border-[#E44E8CFF] text-[#E44E8CFF]` : ""}`}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>


            <a 
                href="/join-us"
                // The following classes make it look and act like a button
                className="bg-[#E44E8CFF] text-white font-semibold px-6 py-2 rounded-lg
             hover:bg-[#C53A7A] hover:scale-105
             transition-[colors,transform] duration-300">
                Join Us
            </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;