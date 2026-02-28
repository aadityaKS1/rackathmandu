import React from "react";
import { useState } from "react";

import img1 from "../../assets/GalleryPageImages/1.png";
import img2 from "../../assets/GalleryPageImages/2.png";
import img3 from "../../assets/GalleryPageImages/3.png";
import img4 from "../../assets/GalleryPageImages/4.png";
import img5 from "../../assets/GalleryPageImages/5.png";
import img6 from "../../assets/GalleryPageImages/6.png";
import img7 from "../../assets/GalleryPageImages/7.png";
import img8 from "../../assets/GalleryPageImages/8.png";
import img9 from "../../assets/GalleryPageImages/9.png";

const images = [
  img1, img2, img3,
  img4, img5, img6,
  img7, img8, img9,
];

const filters = [
  "All Photos",
  "2025",
  "2024",
  "Fellowship Events",
  "Service Projects",
  "Leadership Training",
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All Photos");

  return (
    <section className="w-full bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition 
                ${
                  activeFilter === filter
                    ? "bg-blue-900 text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition duration-300"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-20">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-3 rounded-full flex items-center gap-2 transition">
            View More Albums →
          </button>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;