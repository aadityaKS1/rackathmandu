import React from "react";
import { Calendar } from "lucide-react";

const EventCard = ({
  image,
  date,
  title,
  description,
  status,
  actionType, // "view" or "join"
}) => {
  const isCompleted = status === "Completed";
  const isUpcoming = status === "Upcoming";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        {/* Date */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={16} className="mr-2" />
          {date}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-6">

          {/* Status Badge */}
          <span
            className={`px-3 py-1 text-xs rounded-md font-medium
              ${
                isCompleted
                  ? "bg-gray-100 text-gray-600"
                  : "bg-blue-100 text-blue-600"
              }`}
          >
            {status}
          </span>

          {/* Action Button */}
          {actionType === "view" ? (
            <button className="bg-blue-900 text-white text-sm px-4 py-2 rounded-full">
              View More
            </button>
          ) : (
            <button className="bg-pink-500 text-white text-sm px-4 py-2 rounded-full">
              Join Event
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default EventCard;