import React from "react";
import { NavLink } from "react-router-dom";
const Banner = () => {
  const customStyles = {
    width: "full",
    height: "550px",
    // Applying the specific linear gradient
    background: "linear-gradient(90deg, #193172 0% , #29487C 50%, #66A5AD 100%)",
    // The border-radius property (0px 0px 0px 0px is equivalent to 0)
    borderRadius: "0",
  };
  return (
<section className="relative w-full h-[700px] flex items-center justify-center text-white overflow-hidden">

  {/* Base Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#193172] to-[#66A5AD]" />

  {/* Soft Glow */}
  <div className="absolute w-[700px] h-[700px] bg-[#DA1E5C] opacity-20 blur-[200px] rounded-full top-[-200px] right-[-150px]" />

  {/* Subtle Texture */}
  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:35px_35px] opacity-5"></div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-4xl px-6">
    <h1 className="text-6xl font-bold leading-tight">
      Rotaract Club of Kathmandu
    </h1>

    <p className="mt-6 text-xl opacity-90">
      Lead · Connect · Transform
    </p>

    <p className="mt-2 text-lg opacity-75">
      Fellowship Through Service
    </p>

    <div className="flex gap-6 justify-center mt-10">
      <NavLink to="/contact"> <div className="bg-[#DA1E5C] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
        Get Involved
        </div> 
      </NavLink>
<NavLink to="/events">
      <div className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#193172] transition-all duration-300">
        Explore Events
      </div>
      </NavLink>
    </div>
  </div>

</section>
  );
};

export default Banner;