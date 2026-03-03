import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import API from "../../api"; // your axios instance

// Single Featured Event Card
const FeaturedEventCard = ({ date, title, description, image }) => (
  <div className="relative w-[390px] h-[364px] bg-white rounded-[10px] shadow-[0_0_1px_rgba(23,26,31,0.87),0_0_2px_rgba(23,26,31,0.08)]">
    {/* Event Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-[219px] object-cover rounded-none"
    />

    {/* Event Date */}
    <p className="mt-3 ml-3 font-open-sans text-[14px] leading-[20px] font-semibold text-[#E43F7EFF]">
      {date}
    </p>

    {/* Event Title */}
    <h3 className="mt-1 ml-3 font-montserrat text-[20px] leading-[28px] font-bold text-[#2F3B65FF]">
      {title}
    </h3>

    {/* Event Description */}
    <p className="mt-2 ml-3 w-[342px] font-open-sans text-[14px] leading-[20px] font-normal text-[#4B5563FF]">
      {description}
    </p>
  </div>
);

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events/") // make sure this endpoint matches your DRF API
      .then((res) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter completed (past) events
        const completedEvents = res.data.filter((event) => {
          const eventDate = new Date(event.event_date);
          eventDate.setHours(0, 0, 0, 0);
          return eventDate < today;
        });

        // Sort descending (latest first) and take 3
        const latestThree = completedEvents
          .sort((a, b) => new Date(b.event_date) - new Date(a.event_date))
          .slice(0, 3);

        setEvents(latestThree);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <section className="bg-white py-16 sm:px-10 lg:px-20">
      {/* Section Title */}
      <h2 className="font-montserrat text-[36px] leading-[40px] font-bold text-[#16376EFF] text-center mb-10">
        Featured Events
      </h2>

      {/* Event Cards Container */}
      <div className="flex flex-wrap gap-8 justify-center">
        {events.map((event) => (
          <FeaturedEventCard
            key={event.id}
            title={event.title}
            description={event.description}
            date={event.formatted_date || event.event_date}
            image={event.image}
          />
        ))}

        {/* Placeholders if less than 3 events */}
        {events.length < 3 &&
          [...Array(3 - events.length)].map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="w-[390px] h-[364px] bg-gray-100 rounded-[10px]"
            />
          ))}
      </div>

      {/* View All Events Button */}
      <div className="flex justify-center mt-8">
        <NavLink
          to="/events"
          className="
            w-[180px] h-[48px] px-3 flex items-center justify-center
            font-open-sans text-[16px] leading-[26px] font-semibold
            text-white bg-[#2D679A] rounded-[10px]
            hover:bg-[#1E4669] active:bg-[#142E45]
            disabled:opacity-40
          "
        >
          View All Events
        </NavLink>
      </div>
    </section>
  );
};

export default FeaturedEvents;