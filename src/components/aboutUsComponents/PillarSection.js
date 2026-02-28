import React from "react";
import { User, Globe, RefreshCcw } from "lucide-react";

const PillarsSection = () => {
  return (
    <section className="w-full bg-blue-50 mt-16 py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#193172]">
          Lead · Connect · Transform
        </h2>
        <p className="text-gray-600 mt-3">
          These three pillars guide our approach to service and personal development
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Lead */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
          <div className="w-14 h-14 mx-auto bg-green-100 flex items-center justify-center rounded-full">
            <User className="text-[#66a5ad]" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-blue-900">Lead</h3>
          <p className="text-gray-600">
            We develop leadership skills through project planning, team management, and decision-making.
          </p>
        </div>

        {/* Connect */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
          <div className="w-14 h-14 mx-auto bg-green-100 flex items-center justify-center rounded-full">
            <Globe className="text-[#66a5ad]" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-blue-900">Connect</h3>
          <p className="text-gray-600">
            We build connections within our community and with Rotaract clubs around the world.
          </p>
        </div>

        {/* Transform */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
          <div className="w-14 h-14 mx-auto bg-green-100 flex items-center justify-center rounded-full">
            <RefreshCcw className="text-[#66a5ad]" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-[#193172]">Transform</h3>
          <p className="text-gray-600">
            We transform communities through sustainable service projects and personal growth.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PillarsSection;