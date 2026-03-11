import React from "react";
import { FaUsers, FaHandsHelping, FaBriefcase, FaGlobe } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Avenues = () => {

  const avenues = [
    {
      title: "Service Projects",
      description:
        "Organizing impactful projects that address community needs and create meaningful social change.",
      icon: <FaHandsHelping />,
      color: "from-pink-500 to-rose-400",
      bg: "bg-rose-50"
    },
    {
      title: "Professional Development",
      description:
        "Helping members develop leadership and career skills through mentorship and workshops.",
      icon: <FaBriefcase />,
      color: "from-blue-500 to-indigo-400",
      bg: "bg-blue-50"
    },
    {
      title: "International Relations",
      description:
        "Connecting with Rotaract clubs worldwide and building global friendships.",
      icon: <FaGlobe />,
      color: "from-purple-500 to-violet-400",
      bg: "bg-purple-50"
    },
    {
      title: "Club Administration",
      description:
        "Strengthening club operations and teamwork through effective leadership.",
      icon: <FaUsers />,
      color: "from-green-500 to-emerald-400",
      bg: "bg-green-50"
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white px-6">

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#16376E] mb-4">
          Avenues of Service
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Our initiatives are organized through four key avenues that guide
          leadership development, community engagement, and global collaboration.
        </p>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={3}
          slidesPerGroup={1}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          className="pb-32"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >

          {avenues.map((avenue, index) => (
            <SwiperSlide key={index}>

              <div className={`${avenue.bg} rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 min-h-[340px] flex flex-col justify-between`}>

                {/* Icon */}
                <div
                  className={`mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr ${avenue.color} text-white text-2xl`}
                >
                  {avenue.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#16376E] mb-3">
                  {avenue.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {avenue.description}
                </p>

                {/* CTA */}
                <NavLink
                  to="/events"
                  className="mt-6 inline-block font-semibold text-[#2D679A] hover:text-[#DA1E5C] transition"
                >
                  Explore →
                </NavLink>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Avenues;