import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Committees = () => {
  const [committees, setCommittees] = useState([]);
  const [generalMembers, setGeneralMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [committeeRes, generalRes] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/api/team/committees/`),
          fetch(`${process.env.REACT_APP_API_URL}/api/team/general-members/`)
        ]);

        if (!committeeRes.ok || !generalRes.ok) throw new Error("Failed to fetch");

        const committeeData = await committeeRes.json();
        const generalData = await generalRes.json();

        setCommittees(committeeData);
        setGeneralMembers(generalData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#16376E]"></div>
    </div>
  );

  if (error) return <p className="text-center py-20 text-red-500">Error: {error}</p>;

  const MemberCard = ({ member, isGeneral = false }) => (
    <div className="text-center">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-16 h-16 mx-auto rounded-full object-cover mb-3 border-2 border-[#16376E]"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
      ) : null}

      {/* Fallback icon — shown if no image or image fails to load */}
      <div
        className="w-16 h-16 bg-[#16376E] rounded-full flex items-center justify-center text-white mx-auto mb-3"
        style={{ display: member.image ? "none" : "flex" }}
      >
        <FaUser />
      </div>

      <div className="bg-white rounded-md py-2 px-1 shadow text-sm">
        <p className="font-semibold text-[#16376E]">{member.name}</p>
        <p className="text-gray-500">{isGeneral ? "General Member" : member.role}</p>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-200 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#16376E]">Committees</h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 mb-12"></div>

        {/* Committees */}
        {committees.map((committee, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-xl font-semibold text-[#16376E] mb-8">
              {committee.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {committee.members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        ))}

        {/* General Members */}
        <h2 className="text-3xl font-bold text-[#16376E] mt-20">General Members</h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {generalMembers.map((member) => (
            <MemberCard key={member.id} member={member} isGeneral={true} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Committees;