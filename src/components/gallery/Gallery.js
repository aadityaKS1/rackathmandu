import React from "react";
import { allGalleryImages } from "../../data/GalleryData";

// Single Gallery Card
const GalleryCard = ({ image, alt }) => (
  <div className="overflow-hidden rounded-lg shadow-lg 
                  w-full sm:w-[280px] md:w-[320px] lg:w-[390px] 
                  h-[250px]">
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
);

const Gallery = () => {
  // Filter visible images
  const galleryImages = allGalleryImages.filter((img) => img.show);

  // Sort by ID
  const sortedGalleryImages = galleryImages.sort((a, b) => a.id - b.id);

  // Take first 6 images
  const homeGalleryImages = sortedGalleryImages.slice(0, 6);

  return (
    <section className="bg-gray-50 py-16 sm:px-10 lg:px-20">

      {/* Section Title */}
      <h2 className="font-montserrat text-[36px] leading-[40px] font-bold text-[#16376EFF] text-center mb-10">
        Our Gallery
      </h2>

      {/* Image Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {homeGalleryImages.map((img) => (
          <GalleryCard key={img.id} {...img} />
        ))}
      </div>
      
      {/* View Full Gallery Button */}
      <div className="flex justify-center mt-8">
        <button
          className="
            w-[180px] h-[48px] px-3 flex items-center justify-center
            font-open-sans text-[16px] leading-[26px] font-semibold
            text-white bg-[#2D679A] rounded-[10px]
            hover:bg-[#1E4669] active:bg-[#142E45]
            disabled:opacity-40
          "
        >
          View Full Gallery
        </button>
      </div>

    </section>
  );
};

export default Gallery;