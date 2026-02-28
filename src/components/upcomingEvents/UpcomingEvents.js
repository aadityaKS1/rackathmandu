import React from "react";
import { allEvents } from "../../data/EventsData";
import { NavLink } from "react-router-dom";

const EventCard = ({ title, date, time }) => {
  return (
    <div className="bg-white rounded-2xl 
                    p-5 
                    border border-gray-200 
                    shadow-sm 
                    transition-transform duration-300 
                    hover:scale-105 hover:shadow-md">

      <p className="text-xs uppercase tracking-wide text-[#DA1E5C] mb-2">
        Upcoming
      </p>

      <h3 className="text-base font-semibold text-[#193172] mb-2 line-clamp-1">
        {title}
      </h3>

      <p className="text-sm text-[#66A5AD]">
        {date} • {time}
      </p>
    </div>
  );
};

const UpcomingEvents = () => {
  const upcomingEvents = allEvents
    .filter((event) => event.isUpcoming)
    .sort((a, b) => a.dateTime - b.dateTime)
    .slice(0, 3);

  return (
    <section className="w-full py-16 px-4 z-10 -mt-40 sm:px-6">

      <div className="max-w-4xl lg:max-w-5xl mx-auto 
                      bg-white 
                      rounded-3xl 
                      shadow-lg 
                      p-6 sm:p-8 md:p-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#193172]">
            Upcoming Events
          </h2>
        </div>

        {/* Grid */}
        <div className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        gap-6">
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
            className="inline-block 
                       bg-[#DA1E5C] 
                       text-white 
                       px-8 py-3 
                       rounded-xl 
                       text-sm 
                       font-medium 
                       transition-transform duration-300 
                       hover:scale-105">
            View All Events
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default UpcomingEvents;