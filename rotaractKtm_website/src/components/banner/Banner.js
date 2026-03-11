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
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center text-white overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#193172_0%,#2D679A_25%,transparent_65%)]" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          <div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Lead. Connect. <br />
              Transform.
            </h1>

            <p className="mt-4 md:mt-5 text-lg md:text-xl text-white/70 max-w-md">
              Fellowship Through Service
            </p>

            <div className="flex flex-wrap gap-4 md:gap-5 mt-8 md:mt-10">

              <NavLink to="/contact">
                <button className="bg-[#DA1E5C] px-6 md:px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
                  Get Involved
                </button>
              </NavLink>

              <NavLink to="/events">
                <button className="border border-white/80 px-6 md:px-8 py-3 rounded-lg hover:bg-white hover:text-[#DA1E5C] transition">
                  Explore Events
                </button>
              </NavLink>

            </div>

            <div className="flex flex-wrap gap-8 md:gap-12 mt-10 md:mt-12 text-white/90 text-sm">

              <div>
                <p className="text-xl md:text-2xl font-bold text-white">30+</p>
                Years Impact
              </div>

              <div>
                <p className="text-xl md:text-2xl font-bold text-white">1500+</p>
                Events
              </div>

              <div>
                <p className="text-xl md:text-2xl font-bold text-white">50K+</p>
                People Reached
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE SLIDER */}
      <div className="absolute right-0 top-0 h-full w-full md:w-[75%] z-0">

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt="Rotaract event"
                className="w-full h-full object-cover brightness-[0.85]"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-bounce">
        ↓ Scroll
      </div>

    </section>
  );
};

export default Banner;