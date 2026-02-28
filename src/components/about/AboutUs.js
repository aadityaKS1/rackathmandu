import React from "react";
import { NavLink } from "react-router-dom";
import aboutImage from "../../assets/about.jpg";

const AboutUs = () => {
  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Wider container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#193172] mb-6">
              About Us
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              The Rotaract Club of Kathmandu is a dynamic community of young
              professionals and students committed to leadership, service, and
              meaningful community impact. We foster professional growth,
              strengthen fellowship, and create lasting positive change.
            </p>

            <NavLink
              to="/about"
              className="inline-block bg-[#DA1E5C] text-white px-6 sm:px-7 md:px-8 py-3 rounded-xl transition-transform duration-300 hover:scale-105"
            >
              Learn More
            </NavLink>
          </div>

          {/* Image */}
          <div className="mt-8 md:mt-0">
            <img
              src={aboutImage}
              alt="Rotaract Club Activity"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;