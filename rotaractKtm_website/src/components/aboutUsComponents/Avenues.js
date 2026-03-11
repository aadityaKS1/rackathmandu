import React from "react";
import { FaUsers, FaHandsHelping, FaBriefcase, FaGlobe } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Avenues = () => {

  const avenues = [
    {
      title: "Service Project",
      description:
        "Organizing projects that address social issues and support local communities through service initiatives.",
      icon: <FaHandsHelping />,
    },
    {
      title: "Professional Development",
      description:
        "Helping members develop leadership and professional skills through workshops and networking opportunities.",
      icon: <FaBriefcase />,
    },
    {
      title: "International Relation",
      description:
        "Building global connections by collaborating with Rotaract clubs around the world.",
      icon: <FaGlobe />,
    },
    {
      title: "Club Administration",
      description:
        "Strengthening fellowship among members and ensuring smooth club operations through meetings and internal activities.",
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-[#16376E] mb-6">
          Avenues of Service
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Our activities are organized through different avenues that guide our
          service projects, leadership development, and community impact.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {avenues.map((avenue, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >

              <div>
                {/* Icon */}
                <div className="text-[#2D679A] text-4xl mb-4 flex justify-center">
                  {avenue.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#16376E] mb-3">
                  {avenue.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {avenue.description}
                </p>
              </div>

              {/* Explore Button */}
              <NavLink
                to="/events"
                className="inline-block mt-auto px-6 py-2 bg-[#2D679A] text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Explore
              </NavLink>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Avenues;