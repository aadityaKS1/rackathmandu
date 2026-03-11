import React from "react";
import { NavLink } from "react-router-dom";

import B1 from "../../assets/slideshow/banner1.png";
import B2 from "../../assets/slideshow/banner2.jpg";
import B3 from "../../assets/slideshow/banner3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const Banner = () => {

  const slides = [B1, B2, B3];

  return (
    <section className="relative w-full h-[700px] flex items-center text-white overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#193172_0%,#2D679AFF_46%,#2D679AFF_46%,transparent_100%)]" />
      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

        <div className="grid md:grid-cols-2 items-center gap-16">

          <div>

            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Lead · Connect <br />
              Transform
            </h1>

            <p className="mt-5 text-xl text-white/70 max-w-md">
              Fellowship Through Service
            </p>

            <div className="flex gap-5 mt-10">

              <NavLink to="/contact">
                <button className="bg-[#DA1E5C] px-7 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
                  Get Involved
                </button>
              </NavLink>

              <NavLink to="/events">
                <button className="border border-white/70 px-7 py-3 rounded-lg hover:bg-white hover:text-[#DA1E5C] transition">
                  Explore Events
                </button>
              </NavLink>

            </div>

            <div className="flex gap-10 mt-12 text-white/70 text-sm">

              <div>
                <p className="text-2xl font-bold text-white">30+</p>
                Years Impact
              </div>
              <div>
                <p className="text-2xl font-bold text-white">1500+</p>
                Events
              </div>

              <div>
                <p className="text-2xl font-bold text-white">50K+</p>
                People Reached
              </div>


            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE FULL WIDTH SLIDER */}
      <div className="absolute right-0 top-0 h-full w-[55%] z-0">

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt="Rotaract event"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-[#193172] via-[#193172]/70 to-transparent"></div>      </div>

    </section>
  );
};

export default Banner;