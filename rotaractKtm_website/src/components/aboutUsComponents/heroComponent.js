import React from "react";
import Aboutus from "../../assets/gallery_image.jpg";
const AboutUsBanner = () => {
  return (
   <section
      className="h-[450px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Aboutus})` }}
    >
      <div className="bg-black/40 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Who we are</h1>
      </div>
    </section>
  );
  };

export default AboutUsBanner;