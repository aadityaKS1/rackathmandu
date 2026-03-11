import React, { useEffect, useState } from "react";
import API from "../../api";

const filters = [
  "All",
  "Service-Project",
  "Professional Development",
  "International Relation",
  "Club Admin and Fellowship",
];

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 9;

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

  // Filter photos based on activeFilter
  const filtered =
    activeFilter === "All"
      ? photos
      : photos.filter(
          (photo) =>
            photo.category ===
            activeFilter.toLowerCase().replace(/ /g, "-")
        );

  const displayedPhotos = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {filters.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveFilter(item);
              setShowAll(false);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
              activeFilter === item
                ? "bg-[#193172] text-white"
                : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {displayedPhotos.length > 0 ? (
          displayedPhotos.map((photo) => (
            <div
              key={photo.id}
              className="overflow-hidden rounded-2xl shadow-xl bg-white transition-transform duration-300 hover:scale-105"
            >
              <img
                src={photo.image}
                alt={photo.title || "Gallery Image"}
                className="w-full h-64 object-cover"
              />
              {photo.title && (
                <p className="p-4 text-center font-medium text-gray-700">
                  {photo.title}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-400 py-20">
            No photos found.
          </p>
        )}
      </div>

      {/* View All / View Less Button */}
      {filtered.length > INITIAL_COUNT && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-[#193172] text-white rounded-full hover:bg-[#010f37] transition duration-300"
          >
            {showAll ? "View Less" : "View All Photos"}
          </button>
        </div>
      )}

    </section>
  );
}

export default Gallery;