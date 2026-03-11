import React from "react";
import EventBannerPhoto from "../../assets/eventbanner.png";
const EventBanner = () => {
    return (
   <section
      className="h-[550px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${EventBannerPhoto})` }}
    >
      <div className="bg-black/40 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Events and Activities</h1>
      </div>
    </section>
    );
};

export default EventBanner;