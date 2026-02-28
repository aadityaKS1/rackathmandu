import React from "react";

const ContactBanner = () => {
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
                    Get in Touch With Us
                </h1>

                {/* Sub Text */}
                <p className="mt-5 sm:mt-6 
                      text-base sm:text-lg md:text-xl 
                      opacity-90">
                    Whether you're interested in becoming a member, partnering with us on a project, or just want to learn more about what we do, we'd love to hear from you.
                </p>
            </div>

        </section>
    );
};

export default ContactBanner;