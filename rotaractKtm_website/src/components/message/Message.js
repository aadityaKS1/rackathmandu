import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";



const Message = () => {

  const messages = [
    {
      text: "Being part of Rotaract has transformed my perspective on service and leadership. The connections I've made and the impact we've had on our community has been truly life-changing.",
      name: "Aaditya Singh",
      since: "Member Since 2024"
    },
    {
      text: "Rotaract has given me opportunities to lead projects and work with inspiring people. Every initiative we organize creates real change in our community.",
      name: "Priya Sharma",
      since: "Member Since 2023"
    },
    {
      text: "Joining Rotaract helped me grow personally and professionally. The friendships and experiences I've gained will stay with me for life.",
      name: "Rohan Thapa",
      since: "Member Since 2022"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#29487C] to-[#5AA1B5] py-24 flex flex-col items-center">

      {/* Title */}
      <h2 className="text-white font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
        What Our Members Say
      </h2>

      <div className="max-w-3xl px-6">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}

          loop

        >

          {messages.map((msg, index) => (
            <SwiperSlide key={index}>

              <div className="text-center">

                {/* Quote */}
                <p className="text-white text-xl md:text-2xl leading-relaxed italic">
                  "{msg.text}"
                </p>

                {/* Member */}
                <div className="mt-10">

                  <p className="text-white text-lg font-semibold">
                    {msg.name}
                  </p>

                  <p className="text-gray-200 text-sm">
                    {msg.since}
                  </p>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Message;