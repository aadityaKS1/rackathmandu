import React, { useState, useEffect } from "react";

const ExecutiveBoard = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/team/executive-board/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#16376E]"></div>
    </div>
  );

  if (error) return <p className="text-center py-20 text-red-500">Error: {error}</p>;

  return (
    <section className="py-20 bg-gray-100 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#16376E]">Executive Board</h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 mb-12"></div>
        <div className="grid md:grid-cols-3 gap-10">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                onError={(e) => { e.target.src = "/fallback-avatar.png"; }} // optional fallback
              />
              <h3 className="text-lg font-bold text-[#16376E]">{member.name}</h3>
              <p className="text-red-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveBoard;