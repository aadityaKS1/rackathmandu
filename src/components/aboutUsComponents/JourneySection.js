import React from "react";

const journeyData = [
  { year: "2005", text: "Founding of the Rotaract Club of Kathmandu with 15 charter members." },
  { year: "2010", text: "Launched our signature 'Education for All' project providing scholarships." },
  { year: "2015", text: "Led emergency relief efforts following the devastating Nepal earthquake." },
  { year: "2018", text: "Recognized as Outstanding Rotaract Club in District 3292." },
  { year: "2020", text: "Pivoted to virtual service during the pandemic." },
  { year: "2023", text: "Celebrated 18th anniversary with 'Green Kathmandu' initiative." },
];

const JourneySection = () => {
  return (
    <section className="w-full bg-blue-50 mt-20 py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#193172]">
            Our Journey
          </h2>
          <p className="text-gray-600 mt-3">
            Key milestones and achievements in our club's history
          </p>
        </div>

        {/* Timeline */}
        <div className="hidden md:block">

          <div className="grid grid-cols-3">

            {journeyData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <React.Fragment key={index}>
                  
                  {/* LEFT SIDE */}
                  <div className="flex justify-end pr-8 py-12">
                    {isLeft && (
                      <div className="bg-white p-6 rounded-xl shadow-md text-right max-w-sm">
                        <h3 className="text-lg font-bold text-[#193172] mb-2">
                          {item.year}
                        </h3>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    )}
                  </div>

                  {/* CENTER LINE + RING */}
                  <div className="flex flex-col items-center">
                    <div className="w-1 bg-[#66a5ad] flex-1"></div>
                    <div className="w-6 h-6 border-4 border-[#da1e5c] bg-white rounded-full"></div>
                    <div className="w-1 bg-[#66a5ad] flex-1"></div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex justify-start pl-8 py-12">
                    {!isLeft && (
                      <div className="bg-white p-6 rounded-xl shadow-md text-left max-w-sm">
                        <h3 className="text-lg font-bold text-[#193172] mb-2">
                          {item.year}
                        </h3>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    )}
                  </div>

                </React.Fragment>
              );
            })}

          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden space-y-10">
          {journeyData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {item.year}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JourneySection;