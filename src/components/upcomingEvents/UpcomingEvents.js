// UpcomingEvents.jsx

import React from "react";
import { allEvents } from "../../data/EventsData"; // Correctly import the data file

// Helper component for a single event card (unchanged from prior step)
const EventCard = ({ title, date, time, description }) => (
  <div className="py-2 px-4 border-r border-gray-100  rounded-lg  shadow-sm hover:shadow-lg ">
    <div className="text-3xl text-gray-400 mb-3 tracking-widest leading-none">
      
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

    {/* Date and Time styling */}
    <p className="text-sm font-semibold text-teal-600 mb-4">
      {date}
      <br />
      {time}
    </p>

    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const UpcomingEvents = () => {
  // 1. Filter: Get only events marked as upcoming
  const upcomingEvents = allEvents.filter((event) => event.isUpcoming);

  // 2. Sort: Sort by the date (using the dateTime Date object)
  const sortedUpcomingEvents = upcomingEvents.sort(
    (a, b) => a.dateTime - b.dateTime
  );

  // 3. Limit: Take only the first 3 events for the homepage display
  const homePageEvents = sortedUpcomingEvents.slice(0, 3);

  return (
    // ... (rest of the section container and background styling) ...
    <section className="py-12 bg-gray-50 relative">
      <div className="absolute inset-x-0 top-0 h-40"></div>
      {/* Main Events Card Container */}
      <div className="container mx-auto max-w-5xl px-4 relative z-10  ">
  <div className="container mx-auto max-w-5xl px-4 -mt-36 bg-white p-6 sm:p-10 lg:p-12 rounded-[16px] shadow-2xl border-2 border-purple-300">
          {/* Main Heading */}
          <div className="font-Montserrat text-3xl sm:text-[26px] font-[700] text-red-600 text-center mb-2 -mt-9 tracking-wider">
            UPCOMING MEETINGS & EVENTS
          </div>

          {/* Events Grid/Layout - Renders the 3 filtered events */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Use the limited array here */}
            {homePageEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}

            {/* If there are less than 3 upcoming events, you can add a placeholder here */}
            {homePageEvents.length < 3 &&
              [...Array(3 - homePageEvents.length)].map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="p-4 sm:p-6 text-gray-400"
                >
                  {/* Placeholder content if you want blank spots */}
                </div>
              ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <a
              href="/events" // Link to your separate events page
              className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
            >
              View All Events &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
