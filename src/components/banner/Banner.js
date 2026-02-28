import React from "react";

const Banner = () => {
  return (
    <section className="w-full min-h-[85vh] flex items-center justify-center 
                        bg-gradient-to-br from-[#010f37] via-[#29487C] to-[#66A5AD]
                        px-4 sm:px-6 lg:px-8 
                        py-16 sm:py-20 lg:py-24">

      <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl 
                      text-center text-white mx-auto">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                       font-bold leading-snug">
          Rotaract Club of Kathmandu
        </h1>

        {/* Sub Text */}
        <p className="mt-5 sm:mt-6 
                      text-base sm:text-lg md:text-xl 
                      opacity-90">
          Lead · Connect · Transform
        </p>

        <p className="mt-2 
                      text-sm sm:text-base md:text-lg 
                      opacity-75">
          Fellowship Through Service
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row 
                        justify-center items-center 
                        gap-4 sm:gap-6 
                        mt-8 sm:mt-10">

          <button className="bg-[#DA1E5C] 
                             px-6 sm:px-8 
                             py-2.5 sm:py-3 
                             rounded-xl 
                             font-semibold 
                             shadow-lg 
                             transition-transform duration-300 
                             hover:scale-105 
                             w-full sm:w-auto">
            Get Involved
          </button>

          <button className="border border-white 
                             px-6 sm:px-8 
                             py-2.5 sm:py-3 
                             rounded-xl 
                             transition-colors duration-300 
                             hover:bg-white hover:text-[#193172] 
                             w-full sm:w-auto">
            Explore Events
          </button>

        </div>

      </div>
    </section>
  );
};

export default Banner;