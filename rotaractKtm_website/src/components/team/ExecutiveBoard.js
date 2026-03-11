import React from "react";

const members = [
  { name: "Suman Dangol", role: "President", image: "/team/suman.jpg" },
  { name: "Sandesh Tripathi", role: "Vice President", image: "/team/sandesh.jpg" },
  { name: "Ananta Malla", role: "Secretary", image: "/team/ananta.jpg" },
  { name: "Kritika Dahal", role: "Immediate Past President", image: "/team/kritika.jpg" },
  { name: "Anish Shrestha", role: "Treasurer", image: "/team/anish.jpg" },
];

const ExecutiveBoard = () => {
  return (
    <section className="py-20 bg-gray-100 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#16376E]">
          Executive Board
        </h2>

        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 mb-12"></div>

        <div className="grid md:grid-cols-3 gap-10">

          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-lg font-bold text-[#16376E]">
                {member.name}
              </h3>

              <p className="text-red-500">{member.role}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExecutiveBoard;