import React, { useEffect, useState } from "react";
import API from "../../api";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    API.get("/gallery/")
      .then((res) => {
        const sortedPhotos = res.data.sort((a, b) => b.id - a.id);
        setPhotos(sortedPhotos);
      })
      .catch((err) => {
        console.error("Error fetching gallery:", err);
      });
  }, []);

  const displayedPhotos = showAll ? photos : photos.slice(0, 9);

  return (
    <section
      className="w-full min-h-[70vh] flex flex-col items-center
                 bg-gradient-to-br from-[#010f37] via-[#193172] to-[#66A5AD]
                 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                     font-bold leading-snug text-white text-center mb-12">
        Our Moments in Action
      </h1>

      {/* Gallery Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {displayedPhotos.map((photo) => (
          <div
            key={photo.id}
            className="overflow-hidden rounded-2xl shadow-xl 
                       bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105"
          >
            <img
              src={photo.image}
              alt={photo.title || "Gallery Image"}
              className="w-full h-64 object-cover"
            />
            {photo.title && (
              <p className="p-4 text-center font-medium text-white">
                {photo.title}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      {photos.length > 9 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-[#193172] text-white rounded-full 
                       hover:bg-[#010f37] transition duration-300"
          >
            {showAll ? "View Less" : "View All Photos"}
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;