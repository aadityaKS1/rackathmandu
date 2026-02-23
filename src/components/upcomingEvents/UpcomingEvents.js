import React from "react";
import { allEvents } from "../../data/EventsData";
import { NavLink } from "react-router-dom";

const EventCard = ({ title, date, time }) => (
  <div className="bg-white rounded-lg p-4 shadow-sm 
                  hover:shadow-md transition-all duration-300">

    <p className="text-[10px] uppercase tracking-wide text-[#DA1E5C] mb-1">
      Upcoming
    </p>

    <h3 className="text-sm font-semibold text-[#193172] mb-1 line-clamp-1">
      {title}
    </h3>

    <p className="text-xs text-[#66A5AD]">
      {date} • {time}
    </p>
  </div>
);

const UpcomingEvents = () => {
  const upcomingEvents = allEvents
    .filter((event) => event.isUpcoming)
    .sort((a, b) => a.dateTime - b.dateTime)
    .slice(0, 3);

  return (
    <section className="relative bg-transparent">
      <div className="max-w-6xl mx-auto px-6">

        <div className="-mt-16 bg-white py-12 px-6 rounded-t-[24px] shadow-lg">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#193172]">
              Upcoming Events
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
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