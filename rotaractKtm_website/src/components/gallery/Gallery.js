import React, { useEffect, useState } from "react";
import API from "../../api"; // your axios instance
import { NavLink } from "react-router-dom";

const GalleryCard = ({ image, alt }) => (
  <div className="w-[390px] h-[250px] overflow-hidden rounded-lg shadow-lg">
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
);

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    API.get("/gallery/") // make sure this endpoint matches your DRF url
      .then((res) => {
        // Sort by ID descending (latest first) and take top 6
        const latestImages = res.data
          .sort((a, b) => b.id - a.id)
          .slice(0, 6);
        setImages(latestImages);
      })
      .catch((err) => {
        console.error("Error fetching gallery images:", err);
      });
  }, []);

  return (
    <section className="bg-gray-50 py-16 sm:px-10 lg:px-20">
      {/* Section Title */}
      <h2 className="font-montserrat text-[36px] leading-[40px] font-bold text-[#16376EFF] text-center mb-10">
        Our Gallery
      </h2>

      {/* Image Cards Container */}
      <div className="flex flex-wrap gap-8 justify-center">
        {images.map((img) => (
          <GalleryCard key={img.id} image={img.image} alt={img.alt || "Gallery image"} />
        ))}
      </div>

      {/* View Full Gallery Button */}
      <div className="flex justify-center mt-8">
        <NavLink
          to="/gallery"
          className="
            w-[180px] h-[48px] px-3 flex items-center justify-center
            font-open-sans text-[16px] leading-[26px] font-semibold
            text-white bg-[#2D679A] rounded-[10px]
            hover:bg-[#1E4669] active:bg-[#142E45]
            disabled:opacity-40
          "
        >
          View Full Gallery
        </NavLink>
      </div>
    </section>
  );
};

export default Gallery;