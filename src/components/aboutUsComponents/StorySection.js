import React from "react";

const StorySection = () => {
    return (
        <section className="w-full bg-gray-50 py-12 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

                {/* Left Content */}
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                            Our Story
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            The Rotaract Club of Kathmandu was established in 2005 as a community service organization for young professionals and students aged 18-30. Sponsored by the Rotary Club of Kathmandu, we have grown into one of the most active Rotaract clubs in Nepal, with a strong focus on community development, professional growth, and international understanding.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-6">
                            Over the years, we have implemented numerous successful projects in areas such as education, health, environment, and disaster relief. Our members come from diverse backgrounds but share a common goal of making a positive impact in our communities.
                        </p>

                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            To empower young leaders to create sustainable positive change
                            in our communities and develop personally and professionally
                            through service and fellowship.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
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