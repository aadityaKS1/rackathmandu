import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import API from "../../api"; // your axios instance

const EventSection = () => {
  const [events, setEvents] = useState([]);        // All events from API
  const [displayedEvents, setDisplayedEvents] = useState([]); // Events shown on page
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);  // To track "Load More"

  const INITIAL_COUNT = 6; // Show first 6 initially

  const filters = ["All", "Upcoming", "Completed", "Service-Project", "Professional Development","International Relation", "Club Admin and Fellowship"];

  // Fetch events from API on mount
  useEffect(() => {
    API.get("/events/") // make sure this endpoint matches your DRF url
      .then((res) => {
        // Sort by date descending to show latest first
        const sorted = res.data.sort(
          (a, b) => new Date(b.event_date) - new Date(a.event_date)
        );
        setEvents(sorted);

        // Initially display only the first 6
        setDisplayedEvents(sorted.slice(0, INITIAL_COUNT));
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  // Filter events based on activeFilter
  useEffect(() => {
    const filtered =
      activeFilter === "All"
        ? events
        : events.filter((event) => event.status === activeFilter);

    // If Load More has been clicked, show all filtered events
    if (showAll) {
      setDisplayedEvents(filtered);
    } else {
      setDisplayedEvents(filtered.slice(0, INITIAL_COUNT));
    }
  }, [activeFilter, events, showAll]);

  const handleLoadMore = () => {
    setShowAll(true); // Show all filtered events
  };

  return (
    <section className="w-full py-16 px-6 bg-white sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {filters.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveFilter(item);
                setShowAll(false); // Reset Load More on filter change
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                activeFilter === item
                  ? "bg-[#193172] text-white"
                  : "bg-white border border-gray-300 text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12">
          {displayedEvents.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              date={event.formatted_date} // Assuming serializer has formatted_date
              title={event.title}
              description={event.description}
              status={event.status} // From serializer
              actionType={event.actionType} // From serializer
            />
          ))}
        </div>

        {/* Load More */}
        {!showAll && displayedEvents.length < events.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="bg-[#193172] text-white px-8 py-3 rounded-full"
            >
              Load More Events
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default EventSection;