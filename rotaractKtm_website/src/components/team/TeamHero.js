import React from "react";
import teamImage from "../../assets/team.jpg";

const TeamHero = () => {
  return (
    <section
      className="h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${teamImage})` }}
    >
      <div className="bg-black/40 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Meet Our Team</h1>
      </div>
    </section>
  );
};

export default TeamHero;