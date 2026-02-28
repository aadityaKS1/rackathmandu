import React from "react";
import { allFeaturedEvents } from "../../data/FeaturedEventsData";

// Single Featured Event Card
const FeaturedEventCard = ({ date, title, description, image }) => (
  <div className="bg-white rounded-[10px] shadow-md 
                  flex flex-col 
                  w-full sm:w-[300px] md:w-[360px] lg:w-[390px]">
    
    {/* Event Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-[219px] object-cover rounded-t-[10px]"
    />

    {/* Event Date */}
    <p className="mt-3 px-3 font-open-sans text-[14px] leading-[20px] font-semibold text-[#E43F7EFF]">
      {date}
    </p>

    {/* Event Title */}
    <h3 className="mt-1 px-3 font-montserrat text-[20px] leading-[28px] font-bold text-[#2F3B65FF]">
      {title}
    </h3>

    {/* Event Description */}
    <p className="mb-2 p-3 font-open-sans text-[14px] leading-[20px] font-normal text-[#4B5563FF]">
      {description}
    </p>
  </div>
);

const FeaturedEvents = () => {
  const featuredEvents = allFeaturedEvents.filter((event) => event.show);
  const sortedFeaturedEvents = featuredEvents.sort((a, b) => a.id - b.id);
  const homePageEvents = sortedFeaturedEvents.slice(0, 3);

  return (
    <section className="bg-white py-8 sm:px-10 lg:px-20">
      
      {/* Section Title */}
      <h2 className="font-montserrat text-[36px] leading-[40px] font-bold text-[#16376EFF] text-center mb-10">
        Featured Events
      </h2>

      {/* Event Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {homePageEvents.map((event) => (
          <FeaturedEventCard key={event.id} {...event} />
        ))}

        {/* Placeholders if less than 3 events */}
        {homePageEvents.length < 3 &&
          [...Array(3 - homePageEvents.length)].map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="bg-gray-100 rounded-[10px] 
                         w-full sm:w-[300px] md:w-[360px] lg:w-[390px] 
                         h-[364px]"
            />
          ))}
      </div>

      {/* View All Events Button */}
      <div className="flex justify-center mt-10">
        <button
          className="
            w-[180px] h-[48px] px-3 flex items-center justify-center
            font-open-sans text-[16px] leading-[26px] font-semibold
            text-white bg-[#2D679A] rounded-[10px]
            hover:bg-[#1E4669] active:bg-[#142E45]
            disabled:opacity-40
          "
        >
          View All Events
        </button>
      </div>

    </section>
  );
};

export default FeaturedEvents;