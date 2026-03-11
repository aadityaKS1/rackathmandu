import React from "react";
import { User, Globe, RefreshCcw } from "lucide-react";
import logo from "../../assets/themelogo.png";

const pillars = [
  {
    title: "Lead",
    description:
      "We develop leadership skills through project planning, team management, and decision-making.",
    icon: User,
    color: "text-green-600",
    bg: "bg-green-100"
  },
  {
    title: "Connect",
    description:
      "We build connections within our community and collaborate with Rotaract clubs worldwide.",
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    title: "Transform",
    description:
      "We transform communities through sustainable service projects and personal growth.",
    icon: RefreshCcw,
    color: "text-purple-600",
    bg: "bg-purple-100"
  }
];

const PillarsSection = () => {
  return (
    <section className="w-full bg-blue-50 py-24 px-6 sm:px-10 md:px-16 lg:px-24">

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* LEFT TEXT */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#193172] mb-4">
              Lead · Connect · Transform
            </h2>

            <p className="text-gray-600 leading-relaxed">
              These three pillars guide our approach to service, leadership
              development, and community engagement. Through meaningful
              collaboration and innovative initiatives, Rotaractors create
              positive impact while growing personally and professionally.
            </p>

          </div>

          {/* RIGHT LOGO */}
          <div className="flex justify-center md:justify-end">

            <img
              src={logo}
              alt="Lead Connect Transform"
              className="w-[220px] md:w-[260px] drop-shadow-lg"
            />

          </div>

        </div>

        {/* Pillar Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center space-y-4"
              >

                <div className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full ${pillar.bg}`}>
                  <Icon className={pillar.color} size={26} />
                </div>

                <h3 className="text-xl font-semibold text-[#193172]">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default PillarsSection;