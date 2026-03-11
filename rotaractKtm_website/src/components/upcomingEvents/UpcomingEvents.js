import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import API from "../../api";

const EventCard = ({ title, date, time, status }) => {
  const isCompleted = status === "Completed";

  return (
    <div className="relative group">

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#193172]/5 via-[#DA1E5C]/5 to-[#193172]/5 rounded-xl blur-sm opacity-80"></div>

      <div className="relative bg-gradient-to-b from-white to-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition">
        {/* Status Badge */}
        <span
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${isCompleted
            ? "bg-gray-100 text-gray-600"
            : "bg-green-100 text-green-700"
            }`}
        >
          {status}
        </span>

        {/* Title */}
        <h3 className="text-base font-semibold text-[#193172] mb-3 line-clamp-1">
          {title}
        </h3>

        {/* Date & Time */}
        <div className="flex flex-col gap-2 text-sm text-gray-500">

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>

          {time && (
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{time}</span>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

const UpcomingEvents = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events/")
      .then((res) => {

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

    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);

    return eventDate >= today ? "Upcoming" : "Completed";
  };

  return (
    <section className="relative z-40">

      <div className="max-w-6xl mx-auto px-6">

        <div className="-mt-20 bg-white py-8 px-8 rounded-[22px] shadow-lg">

          {/* Heading */}
          <div className="text-center mb-8">

            <h2 className="text-2xl font-bold text-[#193172]">
              Upcoming Events
            </h2>

            <div className="w-16 h-[3px] bg-gradient-to-r from-[#DA1E5C] to-[#193172] mx-auto mt-3 rounded"></div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.formatted_date || event.event_date}
                time={event.start_time || ""}
                status={getStatus(event.event_date)}
              />
            ))}

          </div>

          {/* CTA */}
          <div className="text-center mt-6">

            <NavLink
              to="/events"
              className="inline-block bg-[#DA1E5C] text-white px-2 py-2 rounded-lg  hover:scale-105 hover:bg-[#b9154d] transition"
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