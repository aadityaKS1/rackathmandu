import React from "react";
import { FaUser } from "react-icons/fa";

const committees = [
  {
    title: "Service Committee",
    members: [
      { name: "Arun Karki", role: "Service Director" },
      { name: "Nisha Tamang", role: "Committee Member" },
      { name: "Sunil Magar", role: "Committee Member" },
      { name: "Rita Poudel", role: "Committee Member" }
    ]
  },
  {
    title: "Professional Development Committee",
    members: [
      { name: "Dipesh KC", role: "Professional Development Director" },
      { name: "Anu Maharjan", role: "Committee Member" },
      { name: "Binod Shah", role: "Committee Member" },
      { name: "Sabina Basnet", role: "Committee Member" }
    ]
  },
  {
    title: "International Service Committee",
    members: [
      { name: "Manish Joshi", role: "International Service Director" },
      { name: "Sujata Limbu", role: "Committee Member" },
      { name: "Kamal Bhattarai", role: "Committee Member" },
      { name: "Anjali Sharma", role: "Committee Member" }
    ]
  }
];

const generalMembers = [
  { name: "Ram Sharma" },
  { name: "Sita Gurung" },
  { name: "Bikash Thapa" },
  { name: "Pooja Karki" },
  { name: "Suman Rai" },
  { name: "Anita Shrestha" },
  { name: "Kiran Magar" },
  { name: "Ramesh Lama" }
];

const Committees = () => {
  return (
    <section className="py-20 bg-gray-200 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#16376E]">
          Committees
        </h2>

        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 mb-12"></div>

        {/* Committees */}
        {committees.map((committee, index) => (
          <div key={index} className="mb-16">

            <h3 className="text-xl font-semibold mb-8">
              {committee.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

              {committee.members.map((member, i) => (
                <div key={i} className="text-center">

                  <div className="w-16 h-16 bg-[#16376E] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    <FaUser />
                  </div>

                  <div className="bg-white rounded-md py-2 shadow text-sm">
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-gray-500">{member.role}</p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        ))}

        {/* General Members Section */}

        <h2 className="text-3xl font-bold text-[#16376E] mt-20">
          General Members
        </h2>

        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {generalMembers.map((member, index) => (
            <div key={index} className="text-center">

              <div className="w-16 h-16 bg-[#16376E] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <FaUser />
              </div>

              <div className="bg-white rounded-md py-2 shadow text-sm">
                <p className="font-semibold">{member.name}</p>
                <p className="text-gray-500">General Member</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Committees;