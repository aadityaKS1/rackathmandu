import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import API from "../../api";

const EventSection = () => {
  const [events, setEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 6;

  const filters = ["All", "Upcoming", "Completed", "Service-Project", "Professional Development", "International Relation", "Club Admin and Fellowship"];

  // Fetch events from API on mount
  useEffect(() => {
    API.get("/events/")
      .then((res) => {
        console.log("Events from API:", res.data); // <-- add this

        const sorted = res.data.sort(
          (a, b) => new Date(b.event_date) - new Date(a.event_date)
        );
        setEvents(sorted);
        setDisplayedEvents(sorted.slice(0, INITIAL_COUNT));
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  // Filter events based on activeFilter
useEffect(() => {
    console.log("Active filter:", activeFilter);
    console.log("Converts to:", activeFilter.toLowerCase().replace(/ /g, "-"));
    console.log("All categories:", events.map(e => e.category));

    const filtered = activeFilter === "All"
      ? events
      : activeFilter === "Upcoming" || activeFilter === "Completed"
        ? events.filter((event) => event.status === activeFilter)
        : events.filter((event) => event.category === activeFilter.toLowerCase().replace(/ /g, "-"));

    if (showAll) {
      setDisplayedEvents(filtered);
    } else {
      setDisplayedEvents(filtered.slice(0, INITIAL_COUNT));
    }
  }, [activeFilter, events, showAll]);

  const handleLoadMore = () => {    // <-- add this here
    setShowAll(true);
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
                setShowAll(false);
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
              date={event.formatted_date}
              title={event.title}
              description={event.description}
              status={event.status}
              actionType={event.actionType}
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