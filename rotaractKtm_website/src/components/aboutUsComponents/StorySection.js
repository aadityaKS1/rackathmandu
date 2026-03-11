import React from "react";

const StorySection = () => {
    return (
        <section className="w-full bg-gray-50 py-12 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

                {/* Left Content */}
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#193172] mb-4">
                            Our Story
                        </h2>
                        <p className="text-gray-600 leading-relaxed">

                            Rotaract Club of Kathmandu lies in R.I. District 3292, chartered on 6th November 1996, is a non-profit making, non-political, non-religious and volunteer service organization of students and young professionals aged between 18 and above. Rotaract Club of Kathmandu is one of the pioneer and most active Rotaract Club in Nepal which is sponsored by Rotary Club of Kathmandu.

                        </p>
                        <p className="text-gray-600 leading-relaxed mt-6">
                            We focus on five avenues of Service; Club Service; Professional Development, International Service, Youth Service and Community service.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-6">
                            We welcome you to visit our Club and also invite you to join with us at our regular meetings, fun-fellowship programs, and volunteer opportunities
                        </p>    
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#193172] mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our vision is to develop an inclusive club that fosters professional growth, environmental stewardship, international understanding and fellowship, empowering a diverse membership to become influential leaders and create lasting impact within the community.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#193172] mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            To provide opportunities for young people to address the needs of their communities while developing leadership skills, professional networks, and international understanding through service projects and social activities.
                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-pink-50 border-l-4 border-[#da1e5c] p-6 rounded-xl shadow-sm h-fit">
                    <h3 className="text-xl font-semibold text-[#da1e5c] mb-3">
                        Our Motto
                    </h3>
                    <p className="italic text-gray-700 mb-4">
                        “Fellowship Through Service”
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We believe that meaningful connections are formed when we work together toward a common goal of serving others. Through our service projects and activities, we build lasting friendships and professional networks while making a positive impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StorySection;