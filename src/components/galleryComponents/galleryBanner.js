import React from "react";

const GalleryBanner = () => {
    return (
        <section className="w-full min-h-[70vh] flex items-center justify-center 
                        bg-gradient-to-br from-[#010f37] via-[#29487C] to-[#66A5AD]
                        px-4 sm:px-6 lg:px-8 
                        py-16 sm:py-20 lg:py-24">

            <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl 
                      text-center text-white mx-auto">

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                       font-bold leading-snug">
                    Our Moments in Action
                </h1>

            </div>
        </section>
    );
};

export default GalleryBanner;