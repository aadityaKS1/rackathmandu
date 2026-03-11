import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import API from "../../api"; // your axios instance

const EventCard = ({ title, date, time, status }) => {
  const isCompleted = status === "Completed";

  return (
    <div className="z-100 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Status Label */}
      <p
        className={`text-[10px] uppercase tracking-wide mb-1 ${
          isCompleted ? "text-gray-500" : "text-[#DA1E5C]"
        }`}
      >
        {status}
      </p>

      {/* Title */}
      <h3 className="text-sm font-semibold text-[#193172] mb-1 line-clamp-1">
        {title}
      </h3>

      {/* Date & Time */}
      <p className="text-xs text-[#66A5AD]">
        {date} {time ? `• ${time}` : ""}
      </p>
    </div>
  );
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events/")
      .then((res) => {
        // sort by newest first and pick latest 3
        const sorted = res.data
          .sort((a, b) => new Date(b.event_date) - new Date(a.event_date))
          .slice(0, 3);

        setEvents(sorted);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  const getStatus = (eventDateStr) => {
    const today = new Date();
    const eventDate = new Date(eventDateStr);
    
    // Reset time for accurate day-only comparison
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);

    return eventDate >= today ? "Upcoming" : "Completed";
  };

  return (
    <section className="relative bg-transparent z-40">
      <div className="max-w-6xl mx-auto px-6">

        <div className="-mt-16 bg-white py-12 px-6 rounded-t-[24px] shadow-lg z-40">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#193172]">
              Upcoming Events
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.formatted_date || event.event_date}
                time={event.start_time ? event.start_time : ""}
                status={getStatus(event.event_date)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <NavLink
              to="/events"
              className="inline-block bg-[#DA1E5C] text-white px-6 py-2 rounded-lg 
                         hover:scale-105 transition-all duration-300 text-sm"
            >
              View All Events
            </NavLink>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;