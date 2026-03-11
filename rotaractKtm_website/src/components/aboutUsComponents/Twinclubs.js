import React from "react";

import logo1 from "../../assets/rotaractpokharalogo.png";
import logo2 from "../../assets/butwalsouthlogo.png";
import logo3 from "../../assets/rotaractmoralogo.png";

const TwinClubs = () => {

  const clubs = [
    { name: "Rotaract Pokhara", logo: logo1 },
    { name: "Rotaract Butwal South", logo: logo2 },
    { name: "Rotaract Club of University of Moratuwa", logo: logo3 }
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-[#193172] mb-14">
          Our Twin Clubs
        </h2>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {clubs.map((club, index) => (
            <div key={index} className="flex flex-col items-center">

              <img
                src={club.logo}
                alt={club.name}
                className="h-20 w-20 object-contain mb-4"
              />

              <p className="text-[#193172] font-medium text-lg">
                {club.name}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TwinClubs;