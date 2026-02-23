import React from "react";
import { NavLink } from "react-router-dom";
import aboutImage from "../../assets/about.jpg";

const AboutUs = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div>
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
              className="inline-block bg-[#DA1E5C] text-white px-6 py-3 
                         rounded-xl hover:scale-105 transition-all duration-300"
            >
              Learn More
            </NavLink>
          </div>

          {/* Image */}
          <div>
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