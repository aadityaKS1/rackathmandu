import React from "react";
import EventCard from "./EventCard";
import health from "../../assets/EventsImages/health.png";
import tree from "../../assets/EventsImages/tree.png";
import anniversary from "../../assets/EventsImages/anniversary.png";
import workshop from "../../assets/EventsImages/workshop.png";
import supply from "../../assets/EventsImages/supply.png";
import hiking from "../../assets/EventsImages/hiking.png";

const Images = {
  health,
  tree,
  anniversary,
  workshop,
  supply,
  hiking,
};

const eventData = [
  {
    image: Images.health,
    date: "July 15, 2023",
    title: "Community Health Camp",
    description:
      "Free medical checkups and health awareness program for underserved communities.",
    status: "Completed",
    actionType: "view",
  },
  {
    image: Images.tree,
    date: "August 5, 2023",
    title: "Tree Plantation Drive",
    description:
      "Join us in planting 500 trees to combat deforestation.",
    status: "Upcoming",
    actionType: "join",
  },
  {
    image: Images.anniversary,
    date: "June 28, 2023",
    title: "Annual Club Anniversary",
    description:
      "Celebration of our club’s anniversary with dinner and awards.",
    status: "Completed",
    actionType: "view",
  },
  {
    image: Images.workshop,
    date: "August 20, 2023",
    title: "Career Development Workshop",
    description:
      "Professional skills workshop focusing on resume building and interviews.",
    status: "Upcoming",
    actionType: "join",
  },
  {
    image: Images.supply,
    date: "June 10, 2023",
    title: "School Supply Drive",
    description:
      "Collection and distribution of school supplies to children.",
    status: "Completed",
    actionType: "view",
  },
  {
    image: Images.hiking,
    date: "September 2, 2023",
    title: "Hiking Trip to Shivapuri",
    description:
      "A day of adventure and team building with fellow Rotaractors.",
    status: "Upcoming",
    actionType: "join",
  },
];

const EventSection = () => {
  return (
    <section className="w-full py-16 px-6 bg-white sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["All", "Upcoming", "Completed", "Fellowship", "Service", "Professional Development"].map((item, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium
                ${index === 0
                  ? "bg-blue-900 text-white"
                  : "bg-white border border-gray-300 text-gray-600"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12">
          {eventData.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-16">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full">
            Load More Events
          </button>
        </div>

      </div>
    </section>
  );
};

export default EventSection;